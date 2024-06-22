import React, { useState } from 'react';
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
  ListItemText,
  Modal,
  IconButton,
  Fade,
  Backdrop
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import './Pricing.scss';
import pricingData from './Pricing.json';
import ContactPricing from '../Contact/ContactPricing.jsx';

const PricingCard = ({ title, description, price, monthly, features, isBasic, onContactClick }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ backgroundColor: isBasic ? 'var(--accent3)' : (title === "Pixel Advanced" ? 'var(--accent)' : 'var(--accent2)'), color: 'var(--primary-text)' }}>
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
        <Button onClick={() => onContactClick(title)} variant="contained" color="primary" fullWidth className="btn">
          {title === "Pixel Basic" ? "Start Your Journey" : (title === "Pixel Advanced" ? "Establish Your Digital Legacy" : "Take Your Business Further")}
        </Button>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {feature.includes("No backend support") || feature.includes("Domain not included") ? <ClearIcon color="primary" /> : <CheckIcon color="primary" />}
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
  const { plans, commonFeatures } = pricingData;
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='body'>
      <Container className='pricing-container'>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom className="pricing-title">
            Let's start building your dreams.
          </Typography>
          <Typography variant="h6" component="p" color="textSecondary" className="pricing-subtitle">
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} onContactClick={handleOpen} />
          ))}
          <CommonFeaturesCard features={commonFeatures} />
        </Grid>
        <Modal
  open={open}
  onClose={handleClose}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500,
  }}
>
  <Fade in={open}>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      padding: '10px'
    }}>
      <Card sx={{
        width: '90%',
        maxWidth: '600px',
        
        
        position: 'relative',
        backgroundColor: 'var(--accent2)',
        overflow: 'auto'
      }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon sx={{ color: 'var(--color-white)' }} />
        </IconButton>
        <Box sx={{ padding: '16px', overflowY: 'auto', maxHeight: 'calc(100vh - 64px)' }}>
          <ContactPricing product={selectedProduct} />
        </Box>
      </Card>
    </Box>
  </Fade>
</Modal>
      </Container>
    </div>
  );
};

export default Pricing;
