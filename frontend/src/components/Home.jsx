// components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Added proper import for Link
import { ChevronRight } from 'lucide-react'; // Added proper import for ChevronRight icon
import Navbar from './Navbar';
import Features from './Features';
import Footer from './Footer';
import hero from '../assets/hero.png'
import { AuthContext } from '../context/AuthContext.jsx';
import { useContext } from 'react';
const Home = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar/>
            <section className="bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                    {/* Left Content Section */}
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 leading-tight mb-4">
                            Smarter Predictions<br />
                            Healthier Hearts
                        </h1>
                        <p className="text-gray-600 mb-8 max-w-lg">
                            Each readmission is a missed opportunity. Our ML-powered model predicts 30-day 
                            heart failure readmissions using real hospital data—helping providers 
                            intervene early, improve care, and save lives, one heartbeat at a time.
                        </p>
                        {user == null ? (
                            <Link to="/login" className="inline-flex  hover:bg-blue-600  items-center bg-red-700 text-white py-3 px-8 rounded-full font-medium">
                                <span className="mr-2" >Get Started</span>
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        ) : (
                            user.role === 'doctor' ? (
                                <Link to="/dashboard" className="inline-flex  hover:bg-blue-600  items-center bg-red-700 text-white py-3 px-8 rounded-full font-medium">
                                    <span className="mr-2" >Dashboard</span>
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            ) : (
                                <Link to="/reports" className="inline-flex  hover:bg-blue-600  items-center bg-red-700 text-white py-3 px-8 rounded-full font-medium">
                                    <span className="mr-2" >Reports</span>
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                        )
                        )}

                    </div>
                    
                    {/* Right Image Section */}
                    <div className="md:w-1/2 relative">
                        <img 
                            src={hero} 
                            alt="Heart health prediction platform" 
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Home;