import React from 'react';
import './Header.css';
import Hero from '../Hero/Hero';
import Navbar from '../../Shared/Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <Hero/>
            <BusinessInfo/>
            
        </div>
    );
};

export default Header;