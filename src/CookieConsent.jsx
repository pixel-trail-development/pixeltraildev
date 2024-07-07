import React, { useState, useEffect } from 'react';
import { Snackbar, SnackbarContent, Button } from '@mui/material';

const ConsentPopup = ({ onConsent }) => {
  const [open, setOpen] = useState(false);
  // This is a test from new OS

  useEffect(() => {
    const consentGiven = localStorage.getItem('consentGiven');
    if (!consentGiven) {
      setOpen(true);
    }
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem('consentGiven', consent);
    setOpen(false);
    onConsent(consent);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      className="consent-banner"
    >
      <SnackbarContent
        message="We use third-party cookies for analytics to better serve our users. Do you consent to these cookies?"
        action={
          <>
            <Button onClick={() => handleConsent('true')} color="primary">
              Yes
            </Button>
            <Button onClick={() => handleConsent('false')} color="secondary">
              No
            </Button>
          </>
        }
      />
    </Snackbar>
  );
};

export default ConsentPopup;
