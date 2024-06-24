import { useEffect } from 'react';
import ReactGA from 'react-ga4';

// Initialize Google Analytics with your tracking ID
const initializeGA = (trackingID) => {
  ReactGA.initialize(trackingID);
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

const ReactGAComponent = ({ trackingID, location, events }) => {
  useEffect(() => {
    if (!trackingID) {
      console.warn('Tracking ID is required for Google Analytics');
      return;
    }
    initializeGA(trackingID);
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
  }, [trackingID, location, events]);

  return null;
};

export default ReactGAComponent;
