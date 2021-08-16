import React from 'react';
import Wilson from '../../../images/wilson.png';
import Ema from '../../../images/Ema.png';
import Aliza from '../../../images/Aliza.png';

import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque, unde nesciunt, et atque excepturi ab fugiat sunt quibusdam quod, impedit iste laborum recusandae',
        name: 'Wilson Harry',
        place: 'California',
        img: Wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque, unde nesciunt, et atque excepturi ab fugiat sunt quibusdam quod, impedit iste laborum recusandae',
        name: 'Ema Gomez',
        place: 'California',
        img: Ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque, unde nesciunt, et atque excepturi ab fugiat sunt quibusdam quod, impedit iste laborum recusandae',
        name: 'Aliza Farari',
        place: 'California',
        img: Aliza
    },
    
]

const Testimonials = () => {
    return (
        <section className="my-5 py-5">
            <div class="container">
                <div className="section-header">
                    <h5 style={{color: '#1CC7C1'}}>TESTIMONIAL</h5>
                    <h1 style={{color: '#3A4256'}}>What's Our Patients <br/> Says</h1>
                    
                </div>

                <div className="mt-5 d-flex justify-content-center">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;