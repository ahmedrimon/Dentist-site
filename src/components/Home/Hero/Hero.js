import React from 'react';
import './Hero.css';
import chair from '../../../images/chair.png';

const Hero = () => {
    return (
        <div style={{height: '550px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quos, reiciendis voluptatibus perferendis iure porro blanditiis dolorem possimus alias? Animi eveniet dolor</p>
                <button className="btn button hero-button">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default Hero;