import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png';

const MakeAppointment = () => {
    return (
        <div className="container d-flex pt-5">
            <div className="row">
                <div className="col-md-5">
                    <img src={doctor} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-7" id="padding-appointment">
                    <h5 style={{color: '#1CC7C1'}}>APPOINTMENT</h5>
                    <h1 className="my-4">Make an appointment <br/>Today</h1>
                    <p>it is a long established fact that a reader will be distractedby the readable <br/> content of a page when looking at its</p>
                    <button className="btn button">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;