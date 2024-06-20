import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import './Pricing.scss';
import pricingData from './Pricing.json';

const CalendlyLink = () => {
  window.open('https://calendly.com/ethanluxton-pixeltrail/web-dev-consult', '_blank');
}

const PricingCard = ({ title, description, price, monthly, features, isBasic }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ backgroundColor: isBasic ? 'var(--color-white)' : (title === "Pixel Advanced" ? 'var(--accent)' : 'var(--color-dark)'), color: isBasic ? 'var(--color-dark)' : 'var(--primary-text)' }}>
      <CardContent>
        <Typography sx={{ color: isBasic ? 'var(--color-dark)' : 'var(--primary-text)' }} variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: isBasic ? 'var(--color-dark)' : 'var(--primary-text)' }} gutterBottom>
          {description}
        </Typography>
        <Box my={2}>
          <Typography variant="h4" component="span" className="price">
            {price}
          </Typography>
          <Typography variant="body2" component="span" sx={{ color: isBasic ? 'var(--color-dark)' : 'var(--primary-text)' }} display="block">
            {monthly}
          </Typography>
        </Box>
        <Button onClick={CalendlyLink} variant="contained" color="primary" fullWidth className="btn">
          {title === "Pixel Basic" ? "Start Your Journey" : (title === "Pixel Advanced" ? "Establish Your Digital Legacy" : "Take Your Business Further")}
        </Button>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {feature.includes("No backend support") ? <ClearIcon color="primary" /> : <CheckIcon color="primary" />}
              </ListItemIcon>
              <ListItemText sx={{ color: isBasic ? 'var(--color-dark)' : 'var(--primary-text)' }} primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  </Grid>
);

const CommonFeaturesCard = ({ features }) => (
  <Grid item xs={12} sm={6} md={12}>
    <Card sx={{ backgroundColor: 'var(--color-dark)', color: 'var(--primary-text)' }}>
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
  const { plans, commonFeatures } = pricingData;

  return (
    <div className='body'>
      <Container className='pricing-container'>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom className="pricing-title">
            Lets start building your dreams.
          </Typography>
          <Typography variant="h6" component="p" color="textSecondary" className="pricing-subtitle">
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
  );
};

export default Pricing;
