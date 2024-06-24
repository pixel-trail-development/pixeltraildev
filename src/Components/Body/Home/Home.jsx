import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import Image from '../../../Assets/PixelTrail.png';
import { SocialIcon } from 'react-social-icons';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from '../../data.json';
import { Typewriter } from 'react-simple-typewriter';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../../SEO.jsx';
import ReactGAComponent from '../../../ReactGA.jsx';

const social = [
  { url: "https://www.x.com/pixeltraildev", label: "Twitter" },
  { url: "https://www.instagram.com/pixeltraildev/?hl=en", label: "Instagram" },
  { url: "https://www.facebook.com/profile.php?id=61560728469609", label: "Facebook" },
  { url: "https://www.linkedin.com/company/pixel-trail-development-llc/", label: "LinkedIn" },
];

function Home() {
  const location = useLocation();

  const events = [
    { category: 'User', action: 'View', label: 'Home Page' },
  ];

  return (
    <>
      <ReactGAComponent
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
          <Typography variant="h1" className="headline templates-section">
            {data.servicesSection.headlineTwo}
          </Typography>
          <Grid container spacing={4} className="template-examples">
            {data.servicesSection.templates.map((template, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className="template-card">
                  <CardContent>
                    <div className="category-container">
                      <Typography variant="overline" className="category">
                        {template.category}
                      </Typography>
                      <ArrowForwardIcon className="arrow-icon" aria-hidden="true" />
                    </div>
                    <Typography variant="h6" className="template-name">
                      {template.name}
                    </Typography>
                    <Typography variant="body2" className="template-description">
                      {template.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className='social-container'>
            <Typography variant="h1" className='headline'>Let's connect</Typography>
            <div className='social-icons'>
              {social.map((socialItem, index) => (
                <SocialIcon 
                  key={index} 
                  url={socialItem.url} 
                  aria-label={socialItem.label} 
                  className="social-icon" 
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
