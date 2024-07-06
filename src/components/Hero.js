import React from 'react';

const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
            <div className="bg-black bg-opacity-70 h-full flex items-center">
                <div className="container mx-auto text-center text-white">
                    <h1 className="text-6xl font-bold mb-4">Find Your Dream Car</h1>
                    <p className="text-2xl mb-8">Wheels to joy.</p>
                    <a href=" http://localhost:3003/cars" className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Get Started</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

