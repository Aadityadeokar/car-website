import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/cars';
import Contact from './pages/Contact';
import Compare from './pages/Compare';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cars" element={<Cars />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/compare" element={<Compare/>}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
