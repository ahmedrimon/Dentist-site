import React from 'react';

const Testimonial = ({testimonial}) => {
    return (
        <div className="container">
            <div className="card py-5" style={{width: '18rem'}}>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <img src={testimonial.img} alt=""/>

                    <h5 style={{color: '#1CC7C1'}}>{testimonial.name}</h5>
                    <h6>{testimonial.place}</h6>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;