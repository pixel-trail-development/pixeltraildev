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

function Home() {
  return (
    <div className="home-page">
      <Container maxWidth="lg" className="main-content">
        
        
        
        
        
        
            <section className="templates-section">
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
            <div className='desc-container'>
                <Typography variant="h1" className="headline">
                    Build your next idea<br />even faster.
                </Typography>
            </div>
            <div className='desc-container'>
                <Typography variant="body1" className="section-description">
                At Pixel Trail Development, we craft visually-stunning websites using React, seamlessly deployed via Netlify.
                <br/><br/>
                Our custom-built solutions are tailored to your needs and maintained to the highest industry standards.
                Only the best for professionals and businesses in the Pacific Northwest.
                </Typography>
            </div>
            <div className="actions">
            <Button onClick={() => (window.open("/contact"))} variant="contained" className="action-button">
                CONTACT
            </Button>
            <Button onClick={() => (window.open("/pricing"))} variant="contained" className="action-button">
                PRICING
            </Button>
            </div>
            </Grid>
            <Grid className='pixel-trail-container' item xs={12} sm={6} md={6}>
                <img src={Image} alt='A pixel trail in a forest' className='pixel-trail'/>
            </Grid>
        </Grid>
            </section>
            
        <Grid container spacing={4} className="template-examples">
          {['Info product', 'Podcast', 'Documentation', 'SaaS marketing'].map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="template-card">
                <CardContent>
                  <Typography variant="overline" className="category">
                    {category}
                  </Typography>
                  <Typography variant="h6" className="template-name">
                    {['Primer', 'Transmit', 'Syntax', 'Salient'][index]}
                  </Typography>
                  <Typography variant="body2" className="template-description">
                    {index === 0 && "We've actually published four info products ourselves and this landing page is honestly better than the sites we designed for all of those."}
                    {index === 1 && "You've ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode."}
                    {index === 2 && "Writing documentation is enough to make you rip your hair out without worrying about the design. Let us help you keep a few strands."}
                    {index === 3 && "Every SaaS marketing site uses the same formula — a hero, feature sections, some testimonials, you know the drill. But some are prettier than others."}
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
