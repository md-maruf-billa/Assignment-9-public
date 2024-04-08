import React from 'react';
import Nav from '../../components/nav/Nav';
import img from '../../assets/hanging_404.gif'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

const Error = () => {
    return (
        <div>
            <div className='min-h-[calc(100vh-220px)]'>
                <Nav></Nav>

                <div className='flex justify-center mt-[68px]'>
                    <img src={img} alt="" />

                </div>
                <div className='flex justify-center items-center'>
                    <Link to="/" className='btn btn-accent'>Go Home</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;