import React from 'react';
import { Container } from '@mui/material'
export const NotFound = () => {
  return (
    <Container className='notPageContainer'>
        <div className='notFoundContainer'>
        <h1 className='notFoundH'>404 - Page Not Found</h1>
        <p className='notFoundP'>The page you are looking for does not exist.</p>
        </div>
    </Container>
  );
};


