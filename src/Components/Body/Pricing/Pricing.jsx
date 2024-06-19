import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import './Pricing.scss';

const Pricing = () => {
  return (
    <body className='body'>
    <Container className='pricing-container'>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom className="pricing-title">
          Get everything, forever.
        </Typography>
        <Typography variant="h6" component="p" color="textSecondary" className="pricing-subtitle">
          Get lifetime access to 500+ components and every template available today, plus any new content we add in the future for a simple one-time price.
        </Typography>
      </Box>
      
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'var(--color-white)', color: 'var(--color-dark)' }}>
            <CardContent>
              <Typography sx={{  color: 'var(--color-dark)' }} variant="h5" component="h2" gutterBottom>
                Pixel Basic
              </Typography>
              <Typography variant="body1" sx={{  color: 'var(--color-dark)' }}  gutterBottom>
                For individuals working on their next big project.
              </Typography>
              <Box my={2}>
                <Typography variant="h4" component="span" className="price">
                  $300
                </Typography>
                <Typography variant="body2" component="span" sx={{  color: 'var(--color-dark)' }}  display="block">
                  +$5/mo
                </Typography>
              </Box>
              <Button variant="contained" color="primary" fullWidth className="btn">
                Start Your Journey
              </Button>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{  color: 'var(--color-dark)' }} primary="Fully responsive, custom website and hosting" />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{  color: 'var(--color-dark)' }} primary="Ongoing updates and maintenance " />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{  color: 'var(--color-dark)' }} primary="Full DNS support" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{  color: 'var(--color-dark)' }} primary="SSL Certificates" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{  color: 'var(--color-dark)' }} primary="SEO Optimization" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ClearIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{  color: 'var(--color-dark)' }} primary="No domain included" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ClearIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{  color: 'var(--color-dark)' }} primary="No backend support" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'var(--accent)', color: 'var(--color-white)' }}>
            <CardContent>
              <Typography sx={{color: 'var(--primary-text)'}} variant="h5" component="h2" gutterBottom>
                Pixel Advanced
              </Typography>
              <Typography sx={{color: 'var(--primary-text)'}} variant="body1" color="textSecondary" gutterBottom>
                For small businesses crafting their digital footprint.
              </Typography>
              <Box my={2}>
                <Typography sx={{color: 'var(--primary-text)'}} variant="h4" component="span" className="price">
                  $600
                </Typography>
                <Typography sx={{color: 'var(--primary-text)'}} variant="body2" component="span" color="textSecondary" display="block">
                  +$10/mo
                </Typography>
              </Box>
              <Button variant="contained" color="primary" fullWidth className="btn">
                Establish Your Digital Legacy
              </Button>
              <List>
                <ListItem>
                  <ListItemText sx={{color: 'var(--primary-text)'}} primary="Everything in Pixel Basic, plus:" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{color: 'var(--primary-text)'}} primary="Domain included ($50/yr max)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{color: 'var(--primary-text)'}} primary="Limited backend support" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText sx={{color: 'var(--primary-text)'}} primary="Custom email initial setup" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'var(--color-dark)', color: 'var(--primary-text)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Pixel Premium
              </Typography>
              <Typography variant="body1" color="--primary-text" gutterBottom>
                For established businesses wanting to scale their digital presence.
              </Typography>
              <Box my={2}>
                <Typography variant="h4" component="span" className="price">
                  $1,200
                </Typography>
                <Typography variant="body2" component="span" sx={{color: 'var(--primary-text)'}} display="block">
                  +$15/mo
                </Typography>
  
              </Box>
              <Button variant="contained" color="primary" fullWidth className="btn">
                Take Your Business Further
              </Button>
              <List>
                <ListItem>
                  
                  <ListItemText primary="Everything in Pixel Advanced, plus:" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Domain included ($75/yr max)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Full backend support" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Initial branding and tech consultation" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="E-commerce Capabilities and content management" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Analytics Setup" />
                </ListItem>
                
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </body>
  );
};

export default Pricing;
