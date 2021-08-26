import React from 'react';
import './AppointmentHeader.css';
import chair from '../../../images/chair.png';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const AppointmentHeader = ({handleDateChange}) => {
    return (
        <div style={{height: '550px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Appoinment</h1>

                <Calendar className="calender-style"
                    onChange={handleDateChange}
                    value={new Date()}
                />
                
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default AppointmentHeader;