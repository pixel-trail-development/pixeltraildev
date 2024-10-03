import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../../SEO.jsx';
import CheckIcon from '@mui/icons-material/Check';
import data from '../../data.json';
import ReactGAComponent from '../../../ReactGA.jsx';

const PricingCard = ({ title, description, price, monthly, features, isBasic }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ backgroundColor: isBasic ? 'var(--accent3)' : (title === "Pixel Total Web Package" ? 'var(--accent)' : 'var(--accent2)'), color: 'var(--primary-text)' }}>
      <CardContent>
        <Typography sx={{ color: 'var(--primary-text)' }} variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--primary-text)' }} gutterBottom>
          {description}
        </Typography>
        <Box my={2}>
          <Typography variant="h4" component="span" className="price">
            {price}
          </Typography>
          <Typography variant="body2" component="span" sx={{ color: 'var(--primary-text)' }} display="block">
            {monthly}
          </Typography>
        </Box>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          color="primary"
          aria-label={`${title} - ${title === "Pixel Basic" ? "Start Your Journey" : (title === "Pixel Advanced" ? "Establish Your Digital Legacy" : "Take Your Business Further")}`}
          className="btn-pricing"
          fullWidth
        >
          {title === "Pixel Consultation" ? "Start Your Journey" : (title === "Pixel Total Web Package" ? "Establish Your Digital Legacy" : "Take Your Business Further")}
        </Button>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckIcon color="primary" />
              </ListItemIcon>
              <ListItemText sx={{ color: 'var(--primary-text)' }} primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  </Grid>
);

const CommonFeaturesCard = ({ features }) => (
  <Grid item xs={12} sm={6} md={12}>
    <Card sx={{ backgroundColor: 'var(--accent2)', color: 'var(--primary-text)' }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          All tiers
        </Typography>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  </Grid>
);

const Pricing = () => {
  const { plans, commonFeatures } = data.pricingSection;
  const location = useLocation();

  // Example events, custom data, and timing data for tracking
  const events = [
    { category: 'Pricing', action: 'View', label: 'Pricing Page' },
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
        title="Pricing - Pixel Trail Development, LLC"
        description="At Pixel Trail Development, our mission is to empower professionals and businesses with visually stunning, high-performance websites."
        keywords="Pixel, Trail, Development, LLC, Ethan Luxton, React, Netlify, AWS"
        author="Ethan Luxton"
        imageUrl="../../../Assets/PixelTrail.png"
        pageUrl="https://pixeltrail.io/pricing"
      />
      <div className='body'>
        <Container className='pricing-container'>
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" component="h1" gutterBottom className="pricing-title">
              Let's start building your dream website.
            </Typography>
            <Typography variant="h6" component="p" color="textSecondary" className="pricing-subtitle">
               Take a look at our below options to see what would best suit your next project.
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
            <CommonFeaturesCard features={commonFeatures} />
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
