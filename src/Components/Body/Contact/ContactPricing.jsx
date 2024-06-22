import React, { useRef } from 'react'
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} 
from '@mui/material'
import emailjs from '@emailjs/browser';
import'./Contact.scss'

const ContactPricing = ({ product }) => {
    const form = useRef();

    const SendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };

    return (
        <Container >
            <Grid container justifyContent="center" >
                <Grid item xs={12} md={8}>
                    <Card >
                        <CardContent className='contact-form'>
                            <Typography variant="h4" component="h2" gutterBottom className='contact-title'>
                                Let's get in touch.
                            </Typography>
                            <form ref={form} onSubmit={SendEmail} >
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Name"
                                    name="user_name"
                                    required
                                    className='textField'
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Phone Number"
                                    name="user_phone"
                                    required
                                    className='textField'
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Email"
                                    name="user_email"
                                    type="email"
                                    required
                                    className='textField'
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Business Name (Optional)"
                                    name="user_business"
                                    className='textField'
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Details about your website needs"
                                    name="user_details"
                                    multiline
                                    rows={4}
                                    required
                                    className='textField'
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Current web domain (Optional)"
                                    name="user_details"
                                    
                                    
            
                                    className='textField'
                                />
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="website-type-label">Type of Website</InputLabel>
                                    <Select
                                        labelId="website-type-label"
                                        name="website_type"
                                        required
                                        className='textField'
                                    >
                                        <MenuItem value="blog">Blog</MenuItem>
                                        <MenuItem value="portfolio">Portfolio</MenuItem>
                                        <MenuItem value="other_business">Other Business</MenuItem>
                                        <MenuItem value="e-commerce">E-commerce</MenuItem>
                                        <MenuItem value="restaurant">Restaurant</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Product"
                                    name="user_product"
                                    value={product}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    required
                                    className='textField'
                                />
                                <Box mt={2}>
                                    <Button variant="contained" color="primary" type="submit">
                                        Send
                                    </Button>
                                </Box>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContactPricing;
