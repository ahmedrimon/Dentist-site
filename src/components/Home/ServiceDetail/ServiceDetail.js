import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '70px'}} src={service.img} alt=""/>
            <h5 className="mt-4 mb-4">{service.title}</h5>
            <p className="text-secondary">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
        </div>
    );
};

export default ServiceDetail;