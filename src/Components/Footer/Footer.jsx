import React from 'react';
import { Typography, Link } from '@mui/material';



const Footer = () => {
  

  return (
    <footer className='footer'> 
      <Typography variant="subtitle1" className='footer-text' align="center" color="textSecondary" component="p">
        All rights reserved 
      </Typography>
      <Typography variant="body2" className='footer-text' color="textSecondary" align="center">
        <Link color="inherit" className='footer-text' href="https://www.pixeltrail.io/">
          Pixel Trail Development, LLC
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
