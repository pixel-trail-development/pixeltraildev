import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import './Pricing.scss';

const Pricing = () => {
  return (
    <Container className='pricing-container'>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom className="pricing-title">
          Get everything, forever.
        </Typography>
        <Typography variant="h6" component="p" color="textSecondary" className="pricing-subtitle">
          Get lifetime access to 500+ components and every template available today, plus any new content we add in the future for a simple one-time price.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={5}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Personal
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                For individuals working on their next big idea.
              </Typography>
              <Box my={2}>
                <Typography variant="h4" component="span" className="price">
                  $299
                </Typography>
                <Typography variant="body2" component="span" color="textSecondary" display="block">
                  one-time payment
                </Typography>
                <Typography variant="body2" component="span" color="textSecondary" display="block">
                  plus local taxes
                </Typography>
              </Box>
              <Button variant="contained" color="primary" fullWidth className="btn">
                Get all-access
              </Button>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Lifetime access. Unlimited projects. Free updates." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Over 500+ components." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Every site template." />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Card sx={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-white)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Teams
              </Typography>
              <Typography variant="body1" color="--primary-text" gutterBottom>
                For product teams and agencies.
              </Typography>
              <Box my={2}>
                <Typography variant="h4" component="span" className="price">
                  $799
                </Typography>
                <Typography variant="body2" component="span" color="--primary-text" display="block">
                  one-time payment
                </Typography>
        
              </Box>
              <Button variant="contained" color="secondary" fullWidth className="btn">
                Get all-access for your team
              </Button>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Lifetime access. Unlimited projects. Free updates." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Get access for your entire team." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Team licenses for up to 25 people." />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pricing;
