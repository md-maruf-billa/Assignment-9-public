import React from 'react';
import Nav from '../../components/nav/Nav';
import img from '../../assets/hanging_404.gif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Nav></Nav>

            <div className='flex justify-center'>
                <img src={img} alt="" />

            </div>
            <div className='flex justify-center items-center'>
                <Link to="/" className='btn btn-accent'>Go Home</Link>
            </div>

        </div>
    );
};

export default Error;