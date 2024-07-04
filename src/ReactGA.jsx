import { useEffect, useState} from 'react';
import ReactGA from 'react-ga4';
import { clarity } from 'react-microsoft-clarity';
import ConsentPopup from './CookieConsent.jsx'; 
// Initialize Google Analytics 
const initializeGA = (trackingID) => {
  ReactGA.initialize(trackingID, {
    gaOptions: {
      cookieFlags: 'SameSite=None; Secure',
    },
  });
};

// Initialize Microsoft Clarity 
const initializeMC = (clarityID) => {
  if (!window.clarityInitialized) {
    clarity.init(clarityID);
    clarity.consent();
    window.clarityInitialized = true;
  }
};

// Set the SameSite attribute for Clarity cookies
const setClarityCookieAttributes = () => {
  document.cookie = `_clsk=${getCookie('_clsk')}; SameSite=None; Secure; path=/;`;
  document.cookie = `_clck=${getCookie('_clck')}; SameSite=None; Secure; path=/;`;
};

// Helper function to get a cookie value by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

// Track page view
const trackPage = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
};

// Track event
const trackEvent = (category, action, label, value, nonInteraction, transport) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
    nonInteraction,
    transport,
  });
};

const ReactGAComponent = ({ trackingID, clarityID, location, events }) => {
  const [consentGiven, setConsentGiven] = useState(null);

  const handleConsent = (consent) => {
    if (consent === 'true') {
      initializeGA(trackingID);
      initializeMC(clarityID);
      setClarityCookieAttributes();
    }
    setConsentGiven(consent);
  };

  useEffect(() => {
    const consentGiven = localStorage.getItem('consentGiven');
    if (consentGiven === 'true') {
      initializeGA(trackingID);
      initializeMC(clarityID);
      setClarityCookieAttributes();
    }
    setConsentGiven(consentGiven);
  }, [trackingID, clarityID]);

  useEffect(() => {
    if (consentGiven === 'true') {
      trackPage(location.pathname);

      if (events) {
        events.forEach((event) => {
          trackEvent(
            event.category,
            event.action,
            event.label,
            event.value,
            event.nonInteraction,
            event.transport
          );
        });
      }
    }
  }, [consentGiven, location, events]);

  return consentGiven === null ? (
    <ConsentPopup onConsent={handleConsent} />
  ) : null;
};

export default ReactGAComponent;
