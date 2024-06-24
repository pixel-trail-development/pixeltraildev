import { useEffect } from 'react';
import ReactGA from 'react-ga4';

// Initialize Google Analytics with your tracking ID
const initializeGA = (trackingID) => {
  ReactGA.initialize(trackingID);
};

// Track page view
const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

// Track event
const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};


const ReactGAComponent = ({ trackingID, location, events}) => {
  useEffect(() => {
    if (!trackingID) {
      console.warn('Tracking ID is required for Google Analytics');
      return;
    }
    initializeGA(trackingID);
    trackPage(location.pathname);

    if (events) {
      events.forEach((event) => {
        trackEvent(event.category, event.action, event.label);
      });
    }
  }, [trackingID, location, events]);

  return null;
};

export default ReactGAComponent;
