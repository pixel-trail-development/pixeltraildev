import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import Headshot from '../../../Assets/ethanluxton.jpg'
import './About.scss';
import { Typewriter } from 'react-simple-typewriter';

function About() {
  return (
    <div className="about-page">
      <Container maxWidth="lg" className="main-content">
        <section className="about-section">
          
              <div className='desc-container'>
                <Typography variant="h1" className="headline">
                  <Typewriter
                    words={["About Pixel Trail Development, LLC"]}
                    typeSpeed={70}
                    cursor
                    cursorStyle='|'
                  />
                </Typography>
              </div>
              <div className='desc-container'>
                <Typography variant="body1" className="section-description">
                  {`
                    At Pixel Trail Development, our mission is to empower professionals and businesses with visually stunning, high-performance websites. We use technologies, such as React, Netlify and AWS to craft custom solutions tailored to your unique needs.
                    
                    We believe in building long-term relationships with our clients, offering continuous support and maintenance to ensure your online presence remains robust and up-to-date. From ideation to deployment, we guide you through every step of the website creation journey, pixel-by-pixel.
                  `.split('\n').map((line, index) => (
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
            
        </section>
        <section className="team-section">
          <Typography variant="h1" className="headline">
            The person behind the scenes
          </Typography>
          <Grid container spacing={4} className="team-members">
            {[
              { name: "Ethan Luxton", role: "Developer & Owner", description: '"From javascript bootcamp to business owner". With many years experience in customer service, finance and software development, rest assured all the needs of your project will be met from every angle.'},
            ].map((member, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card className="team-card">
                        <CardContent>
                            <Typography variant="h6" className="team-name">
                                {member.name}
                            </Typography>
                            <Typography variant="subtitle1" className="team-role">
                                {member.role}
                            </Typography>
                            <Typography variant="body2" className="team-description">
                                {member.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            <Grid item xs={12} sm={6} md={3} className="grid-container">
                    <img src={Headshot} className="headshot" alt="Ethan Luxton photographed"/>
            </Grid>
            
          </Grid>
        </section>
      </Container>
    </div>
  );
}

export default About;
