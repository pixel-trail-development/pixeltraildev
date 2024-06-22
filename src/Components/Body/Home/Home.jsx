import React from 'react';
import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import Image from '../../../Assets/PixelTrail.png'
import './Home.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from './Home.json';
import { Typewriter } from 'react-simple-typewriter'
function Home() {
  
  return (
    <div className="home-page">
      <Container maxWidth="lg" className="main-content">
        <section className="templates-section">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <div className='desc-container'>
                <Typography variant="h1" className="headline">
                <Typewriter
                  words={[data.headline]}
                  typeSpeed={70}
                  cursor
                  cursorStyle='|'
                />
                </Typography>
              </div>
              <div className='desc-container'>
                <Typography variant="body1" className="section-description">
                  {data.sectionDescription.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
              </div>
              <div className="actions">
                {data.buttons.map((button, index) => (
                  <Button key={index} onClick={() => window.open(button.link)} variant="contained" className="action-button">
                    {button.text}
                  </Button>
                ))}
              </div>
            </Grid>
            <Grid className='pixel-trail-container' item xs={12} sm={6} md={6}>
              {/* 
              Created using MidJourney AI, all rights reserved by 
              Pixel Trail Development LLC for redistribution of this image.
              */}
              <img src={Image} alt='A pixel trail in a video-game like forest' className='pixel-trail'/>
            </Grid>
          </Grid>
        </section>
        <Typography variant="h1" className="headline templates-section">
          {data.headlineTwo}
        </Typography>
        <Grid container spacing={4} className="template-examples">
          {data.templates.map((template, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="template-card">
                <CardContent>
                  <div className="category-container">
                    <Typography variant="overline" className="category">
                      {template.category}
                    </Typography>
                    <ArrowForwardIcon className="arrow-icon" />
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
      </Container>
    </div>
  );
}

export default Home;