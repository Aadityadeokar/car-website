import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Contact = () => {
    return (
        <section className="px-full py-16 bg-black">
            <div className="container mx-auto py-12">
                <h1 className="text-4xl font-bold mb-4"></h1>
                <section className="py-12">
                    <div className="container mx-auto">
                        <h2 className="text-white text-4xl font-bold text-center mb-12">Our Representatives</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card
                                className="contact-card"
                                sx={{
                                    margin: 2,
                                    padding: 2,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Jane Smith"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Jane Smith
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Senior Sales Representative
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Phone: (123) 0000-6789
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Email: janesmith@gmail.com
                                    </Typography>
                                    <Button size="small" href="mailto:janesmith@gmail.com">Send Email</Button>
                                </CardContent>
                            </Card>

                            <Card
                                className="contact-card"
                                sx={{
                                    margin: 2,
                                    padding: 2,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="John Doe"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        John Doe
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Sales Manager
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Phone: (123) 456-7890
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Email: johndoe@yahoo.com
                                    </Typography>
                                    <Button size="small" href="mailto:johndoe@yahoo.com">Send Email</Button>
                                </CardContent>
                            </Card>

                            <Card
                                className="contact-card"
                                sx={{
                                    margin: 2,
                                    padding: 2,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Emily Davis"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Emily Davis
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Sales Associate
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Phone: (123) 555-1234
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Email: emilydavis@gmail.com
                                    </Typography>
                                    <Button size="small" href="mailto:emilydavis@gmail.com">Send Email</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Contact;
