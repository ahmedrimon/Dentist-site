import React from 'react';
import fluoride from '../../../images/Fluoride.png';
import cavity from '../../../images/Cavity.png';
import teeth from '../../../images/Teeth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        title: 'Fluoride Treatment',
        img: fluoride
    },
    {
        title: 'Cavity Filling',
        img: cavity
    },
    {
        title: 'Teeth Whitening',
        img: teeth
    },
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h1 style={{color: '#3A4256'}}>Services We Provide</h1>
            </div>

                <div className="d-flex justify-content-center">
                    <div className="row w-75 mt-5 pt-5">
                        {
                            serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Services;