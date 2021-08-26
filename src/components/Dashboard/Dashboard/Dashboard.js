import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar.js';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate.js';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])

    const handleDateChange = date => {
        setSelectedDate(date);

        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: {contentType: 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res => res.json())
        .then(data => setAppointments(data));
    }
    return (
        <section>
            <div style={containerStyle} class="container-fluid row">
                <div class="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div class="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div class="col-md-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;