import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CarComparison = ({ cars }) => {
    return (
        <section className="px-4 py-16 bg-black">
            <div className="container mx-auto py-12">
                <h2 className="text-3xl text-white font-bold text-center mb-8">Car Comparison</h2>
                <TableContainer component={Paper} className="bg-white">
                    <Table aria-label="car comparison table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Feature</TableCell>
                                {cars.map((car, index) => (
                                    <TableCell key={index}>{car.title}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                {cars.map((car, index) => (
                                    <TableCell key={index}>
                                        <img src={car.images[0]} alt={car.title} style={{ width: '100px' }} />
                                    </TableCell>
                                ))}
                            </TableRow>
                            <TableRow>
                                <TableCell>Model</TableCell>
                                {cars.map((car, index) => (
                                    <TableCell key={index}>{car.description}</TableCell>
                                ))}
                            </TableRow>
                            <TableRow>
                                <TableCell>Price</TableCell>
                                {cars.map((car, index) => (
                                    <TableCell key={index}>{car.price}</TableCell>
                                ))}
                            </TableRow>
                            {/* Add more rows for other features as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
};

export default CarComparison;
