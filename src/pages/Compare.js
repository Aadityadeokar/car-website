// Compare.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Compare = () => {
    const location = useLocation();
    const { selectedCars } = location.state || { selectedCars: [] };

    return (
        <section className="px-full py-16 bg-black">
            <div className="container mx-auto py-12">
                <h1 className="text-4xl font-bold text-white text-center mb-8">Compare Cars</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl text-white font-bold mb-4">Selected Cars</h2>
                        <ul className="text-white">
                            {selectedCars.map((car, index) => (
                                <li key={index} className="mb-4">
                                    <h3 className="text-2xl font-bold">{car.title}</h3>
                                    <p className="text-lg">{car.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl text-white font-bold mb-4">Comparison Table</h2>
                        {/* Table to display comparison */}
                        <table className="table-fixed w-full text-white">
                            <thead>
                                <tr>
                                    <th className="w-1/4">Feature</th>
                                    {selectedCars.map((car, index) => (
                                        <th key={index} className="w-3/4">{car.title}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example rows (to be customized based on your needs) */}
                                <tr>
                                    <td>Price</td>
                                    {selectedCars.map((car, index) => (
                                        <td key={index}>{car.price}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>Engine</td>
                                    {selectedCars.map((car, index) => (
                                        <td key={index}>{car.engine}</td>
                                    ))}
                                </tr>
                                {/* Add more rows for other features */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Button component={Link} to="/cars" variant="outlined" color="secondary">
                        Back to Cars
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Compare;
