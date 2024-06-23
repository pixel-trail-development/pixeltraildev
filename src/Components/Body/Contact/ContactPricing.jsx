import React from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography
} from '@mui/material';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const ContactPricing = ({ product }) => {
    
    const SendEmail = (e) => {
        e.preventDefault();

        // Check the form data
        const formData = new FormData(e.target);
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        emailjs
          .sendForm(
            process.env.REACT_APP_EJS_SID, 
            process.env.REACT_APP_EJS_TID, 
            e.target, 
            process.env.REACT_APP_EJS_PK
          )
          .then(
            () => {
              console.log('Form data:', formData);
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
    };

    return (
        <div className='contact-page'>
        <Container className='form-page'>
            <Grid container justifyContent="center" >
                <Grid item xs={12} md={8}>
                    <Card >
                        <CardContent className='contact-form'>
                            <Typography variant="h4" component="h2" gutterBottom className='contact-title'>
                                Let's get in touch.
                            </Typography>
                            <form onSubmit={SendEmail}>
                                <div className="form-group">
                                    <label htmlFor="user_name">Name</label>
                                    <input
                                        type="text"
                                        id="user_name"
                                        name="user_name"
                                        required
                                        className="textField"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="user_phone"
                                        name="user_phone"
                                        required
                                        className="textField"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_email">Email</label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="user_email"
                                        required
                                        className="textField"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_business">Business Name (Optional)</label>
                                    <input
                                        type="text"
                                        id="user_business"
                                        name="user_business"
                                        className="textField"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_details">Details about your website needs</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required
                                        className="textField"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_domain">Current web domain (Optional)</label>
                                    <input
                                        type="text"
                                        id="user_domain"
                                        name="user_domain"
                                        className="textField"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website_type">Type of Website</label>
                                    <select id="website_type" name="website_type" required className="textField">
                                        <option value="blog">Blog</option>
                                        <option value="portfolio">Portfolio</option>
                                        <option value="other_business">Other Business</option>
                                        <option value="e-commerce">E-commerce</option>
                                        <option value="restaurant">Restaurant</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website_type">Service you are interested in</label>
                        
                                    <select id="user_product" name="user_product" required className="textField">
                                        <option value="pixel-basic">Pixel Basic</option>
                                        <option value="pixel-advanced">Pixel Advanced</option>
                                        <option value="pixel-premium">Pixel Premium</option>
                    
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="submitButton">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
}

export default ContactPricing;
