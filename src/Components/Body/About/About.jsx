import React, { useEffect, useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Headshot from '../../../Assets/ethanluxton.jpg';
import data from '../../data.json';
import SEO from '../../SEO.jsx';
function About() {
  const [aboutContent, setAboutContent] = useState({});
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setAboutContent(data);
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!aboutContent.aboutSection) return null;

  return (
    <>
    <SEO 
      title="About - Pixel Trail Development, LLC"
      description="At Pixel Trail Development, our mission is to empower professionals and businesses with visually stunning, high-performance websites."
      keywords="Pixel, Trail, Development, LLC, Ethan Luxton, React, Netlify, AWS"
      author="Ethan Luxton"
      imageUrl="../../../Assets/PixelTrail.png"
      pageUrl="https://pixeltrail.io/about"
    />
    <div className="about-page">
      <Container maxWidth="lg" className="main-content">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <section className="about-section">
              <Typography variant="h1" className="headline">
                {aboutContent.aboutSection.headline}
              </Typography>
              <Typography variant="body1" className="section-description">
                {aboutContent.aboutSection.description.split('\n').map((line, index) => (
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
            </section>
          </Grid>
          <Grid item xs={12} md={6}>
            <section className="team-section">
              <Typography variant="h1" className="headline">
                {aboutContent.teamSection.headline}
              </Typography>
              <Grid container spacing={4} className="team-members">
                {aboutContent.teamSection.members.map((member, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
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
                <Grid item xs={12} sm={6} md={6} className="grid-container">
                  <img src={Headshot} className="headshot" alt="Ethan Luxton photographed" />
                </Grid>
              </Grid>
            </section>
          </Grid>
        </Grid>

        
        <section className="faq-section">
        <Typography variant="h1" className="headline">
          {aboutContent.faqSection.headline}
        </Typography>
          {aboutContent.faqSection.faqs.map((faq, index) => (
            <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </section>
      </Container>
    </div>
    </>
  );
}

export default About;
