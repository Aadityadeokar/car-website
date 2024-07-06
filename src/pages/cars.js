import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarCard from '../components/CarCard';
import { Button } from '@mui/material'; // Import Button from MUI

const Cars = () => {
    const navigate = useNavigate();
    const [selectedCars, setSelectedCars] = useState([]);

    const handleToggleCompare = (car) => {
        if (selectedCars.some((selectedCar) => selectedCar.title === car.title)) {
            setSelectedCars(selectedCars.filter((selectedCar) => selectedCar.title !== car.title));
        } else {
            if (selectedCars.length < 2) {
                setSelectedCars([...selectedCars, car]);
            }
        }
    };

    const handleCompare = () => {
        if (selectedCars.length === 2) {
            navigate('/compare', { state: { cars: selectedCars } });
        }
    };


    const carsData = [
        {
            imgSrc: 'https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1200',
            title: 'Rolls Royce',
            description: 'Wraith',
            link: 'https://www.carwow.co.uk/car-reviews#make-model-menu'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/217326/pexels-photo-217326.jpeg?auto=compress&cs=tinysrgb&w=1200',
            title: 'Mercedes Benz',
            description: 'AMG GT',
            link: 'https://www.carwow.co.uk/mercedes/amg-gt-coupe'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Audi',
            description: 'RS5',
            link: 'https://www.carwow.co.uk/audi/rs5'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
            title: 'Land Rover',
            description: 'Evoque',
            link: 'https://www.carwow.co.uk/land-rover/range-rover-evoque'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/10256429/pexels-photo-10256429.jpeg?auto=compress&cs=tinysrgb&w=1200',
            title: 'Audi',
            description: 'R8',
            link: 'https://www.carwow.co.uk/audi/r8'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1200',
            title: 'Mercedes Benz',
            description: 'SLC 500',
            link: 'https://www.carwow.co.uk/car-reviews#make-model-menu'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
            title: 'BMW',
            description: '3 Series',
            link: 'https://www.carwow.co.uk/bmw/3-series-touring'
        },
    ];

    return (
        <section className="px-full py-16 bg-black">
            <div className="container mx-auto py-12">
                <section className="py-12">
                    <div className="container mx-auto">
                        <h2 className="text-3xl text-white font-bold text-center mb-8">Our Cars</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {carsData.map((car, index) => (
                                <CarCard
                                    key={index}
                                    imgSrc={car.imgSrc}
                                    title={car.title}
                                    description={car.description}
                                    link={car.link}
                                    onToggleCompare={() => handleToggleCompare(car)}
                                    isSelected={selectedCars.some((selectedCar) => selectedCar.title === car.title)}
                                />
                            ))}
                        </div>
                        {selectedCars.length === 2 && (
                            <div className="text-center mt-8">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleCompare}
                                >
                                    Compare Selected Cars
                                </Button>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </section>
    );
};
export default Cars;