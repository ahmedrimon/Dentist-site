import React from 'react';
import Blog from '../Blog/Blog';

import caudi from '../../../images/Caudi.png';
import john from '../../../images/john.png';

const blogData = [
    {
        name: 'Dr.Caudi',
        date: '23 April 2019',
        title: '2 times of brush in a day can keep you healthy',
        quote: 'it is a long established fact that by the readable content of a lot layout. The point',
        img: caudi
    },
    {
        name: 'Dr.john Mictchel',
        date: '23 August 2019',
        title: 'The tooth cancer is talking a challenge',
        quote: 'it is a long established fact that by the readable content of a lot layout. The point',
        img: john
    },
    {
        name: 'Dr.Caudi',
        date: '23 April 2019',
        title: '2 times of brush in a day can keep you healthy',
        quote: 'it is a long established fact that by the readable content of a lot layout. The point',
        img: caudi
    }
]

const Blogs = () => {
    return (
        <section className="container">
            <div className="text-center">
                    <h5 style={{color: '#1CC7C1'}}>OUR BLOG</h5>
                    <h1 style={{color: '#3A4256'}}>From Our Blog News</h1>
            </div>
            <div className="mt-5 d-flex justify-content-center">
                {
                    blogData.map(blog => <Blog blog={blog}></Blog>)
                }
            </div>
        </section>
    );
};

export default Blogs;