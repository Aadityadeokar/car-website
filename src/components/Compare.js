import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const Compare = () => {
    const location = useLocation();
    const { compareList } = location.state || { compareList: [] };

    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Compare Cars
            </Typography>
            <Grid container spacing={4}>
                {compareList.map((car, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                margin: 'auto',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                },
                                textTransform: 'none', 
                                display: 'block', 
                                padding: 0, 
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={car.imgSrc}
                                alt={car.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {car.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {car.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Compare;
