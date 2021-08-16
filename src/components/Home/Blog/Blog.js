import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className="container">
            <div className="container">
            <div className="card py-5" style={{width: '18rem'}}>
                <div className="card-body">
                    
                    <img src={blog.img} alt=""/>
                    <p>{blog.name}</p>
                    <small>{blog.date}</small>

                    <h4>{blog.title}</h4>
                    <p className="text-secondary">{blog.quote}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;