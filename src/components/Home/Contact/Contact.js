import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
    <div className="container mt-5">
            <div>
                <h5 style={{color: '#1CC7C1', textAlign: 'center'}}>CONTACT US</h5>
                <h1 style={{color: '#3A4256', textAlign: 'center'}}>Always Connect with us</h1>
            </div>
        
            <br/>

            <form className="form">
                <div className="form-group"> 
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address*"/>
                </div>
                <br/>
                <div className="form-group">
                    <input type="subject" className="form-control" placeholder="Subject*"/>
                </div>
                <br/>
                <div className="form-group">
                    <input type="subject" className="form-control" placeholder="Your Message*"/>
                </div>

            </form>

                <button className="btn button" id="main-button">Submit</button>
            

    </div>
    );
};

export default Contact;