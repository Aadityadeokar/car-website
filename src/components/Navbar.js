import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">CarZone</Link>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-red-800 hover:text-white">Home</Link></li>
                    <li><Link to="/about" className="text-white hover:text-white">About</Link></li>
                    <li><Link to="/cars" className="text-green-700 hover:text-white">Cars</Link></li>
                    <li><Link to="/contact" className="text-blue-600 hover:text-white">Contact</Link></li>
                    <li><Link to="/compare" className="text-yellow-600 hover:text-white">Compare</Link></li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;

