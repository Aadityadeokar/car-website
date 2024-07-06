import React from 'react';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Cars</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CarCard 
                            imgSrc="https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                         
                           title="ROLLS ROYCE" 
                            description="Wraith" 
                        />
                        <CarCard 
                            imgSrc="https://images.pexels.com/photos/217326/pexels-photo-217326.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                            title="Mercedes Benz" 
                            description="AMG GT" 
                        />
                        <CarCard 
                            imgSrc="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            title="AUDI" 
                            description="RS5." 
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

