import React from 'react';

import doctor from '../../../images/doctor.png';
import Doctor from '../Doctor/Doctor';

const doctorData = [
    {
        img: doctor,
        name: 'Dr. Caudi',
        number: '+61 452 200 126'

    }
]

const Doctors = () => {
    return (
        <section className="container mt-5">
            <div>
                <h5 className="text-center" style={{color: '#1CC7C1'}}>Our Doctors</h5>
            </div>
            <div className="d-flex margin">
                {
                    doctorData.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </div>
        </section>
    );
};

export default Doctors;