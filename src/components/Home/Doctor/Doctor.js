import React from 'react';
import './Doctor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    return (
        <div class="container d-flex margin">
                <div className="col-md-3">
                    <img src={doctor.img} alt="" className="img-fluid"/>
                    <h3 className="text-center">{doctor.name}</h3>
                    <p className="number"><FontAwesomeIcon style={{color: '#1CC7C1'}} icon={faPhoneAlt} /> {doctor.number}</p>
                </div>
                <div className="col-md-3">
                    <img src={doctor.img} alt="" className="img-fluid"/>
                    <h3 className="text-center">{doctor.name}</h3>
                    <p className="number"><FontAwesomeIcon style={{color: '#1CC7C1'}} icon={faPhoneAlt} /> {doctor.number}</p>
                </div>
                <div className="col-md-3">
                    <img src={doctor.img} alt="" className="img-fluid"/>
                    <h3 className="text-center">{doctor.name}</h3>
                    <p className="number"><FontAwesomeIcon style={{color: '#1CC7C1'}} icon={faPhoneAlt} /> {doctor.number}</p>
                </div>
        </div>
    );
};

export default Doctor;