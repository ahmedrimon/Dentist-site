import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="container d-flex footer">
            <div className="col-md-3 text-secondary" id="emergency">
                <h5>Emergency Dental Care</h5>
                <h5>Check Up</h5>
                <h5>Treatment of Personal Diseases</h5>
                <h5>Tooth Extraction</h5>
                <h5>Check Up</h5>
            </div>
            <div className="col-md-3 text-secondary">
                <h4 style={{color: '#1CC7C1'}}>Services</h4>
                <h5>Emergency Dental Care</h5>
                <h5>Check up</h5>
                <h5>Treatment of Personal</h5>
                <h5>Tooth Extraction</h5>
                <h5>Check Up</h5>
                <h5>Check Up</h5>
                <h5>Check Up</h5>
            </div>
            <div className="col-md-3 text-secondary">
                <h4 style={{color: '#1CC7C1'}}>Oral Health</h4>
                <h5>Emergency Dental Care</h5>
                <h5>Check up</h5>
                <h5>Treatment of Personal</h5>
                <h5>Tooth Extraction</h5>
                <h5>Check Up</h5>
                <h5>Check Up</h5>
                <h5>Check Up</h5>
            </div>
            <div className="col-md-3 text-secondary">
                <h4 style={{color: '#1CC7C1'}}>Our Address</h4>
                <h5>New York - 101010 Hudson Yards</h5>
                <br/>
                <FontAwesomeIcon className="logo" icon={faFacebook}/>
                <FontAwesomeIcon className="logo" icon={faGoogle}/>
                <FontAwesomeIcon className="logo" icon={faTwitter}/>
                <br/>
                <small>Call Now</small>
                <button className="btn button">+2025550295</button>
            </div>
        </section>
    );
};

export default Footer;