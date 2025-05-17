import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Button,
} from '@mui/material';
import Image from '../../../Assets/PixelTrail.png';
import data from '../../data.json';
import { Typewriter } from 'react-simple-typewriter';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../../SEO.jsx';
import ReactGAComponent from '../../../ReactGA.jsx';



function Home() {
  const location = useLocation();

  const events = [
    { category: 'User', action: 'View', label: 'Home Page' },
  ];

  return (
    <>
      <ReactGAComponent
        clarityID={process.env.REACT_APP_CLARITY_TOKEN}
        trackingID={process.env.REACT_APP_GA_TOKEN}
        location={location}
        events={events}
        
      />
      <SEO 
        title="Home - Pixel Trail Development, LLC"
        description="At Pixel Trail Development, our mission is to empower professionals and businesses with visually stunning, high-performance websites."
        keywords="Pixel, Trail, Development, LLC, Ethan Luxton, React, Netlify, AWS"
        author="Ethan Luxton"
        imageUrl="../../../Assets/PixelTrail.png"
        pageUrl="https://pixeltrail.io/"
      />
      <div className="home-page">
        <Container maxWidth="lg" className="main-content">
          <section className="templates-section">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <div className='desc-container'>
                  <Typography variant="h1" className="headline" aria-label="Dynamic headline">
                    <Typewriter
                      words={[data.servicesSection.headline]}
                      typeSpeed={70}
                      cursor
                      cursorStyle='|'
                    />
                  </Typography>
                </div>
                <div className='desc-container'>
                  <Typography variant="body1" className="section-description">
                    {data.servicesSection.sectionDescription.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line.includes("pixel-by-pixel.") ? (
                          <>
                            {line.split("pixel-by-pixel.")[0]}
                            <span className="pixel-highlight">pixel-by-pixel.</span>
                            {line.split("pixel-by-pixel.")[1]}
                          </>
                        ) : (
                          line
                        )}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                </div>
                <div className="actions">
                  {data.servicesSection.buttons.map((button, index) => (
                    <Button 
                      key={index} 
                      component={Link} 
                      to={button.link} 
                      variant="contained" 
                      color="primary"
                      className="action-button"
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </Grid>
              <Grid className='pixel-trail-container' item xs={12} sm={6} md={6}>
                <img src={Image} alt='A pixel trail in a video-game like forest' className='pixel-trail' />
              </Grid>
            </Grid>
          </section>
          
          
        </Container>
      </div>
    </>
  );
}

export default Home;
