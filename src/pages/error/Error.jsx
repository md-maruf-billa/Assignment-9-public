import React from 'react';
import Nav from '../../components/nav/Nav';
import img from '../../assets/notFound.gif'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

const Error = () => {
    return (
        <div className='bg-[#f0f0f0]'>
            <div className='min-h-[calc(100vh-273px)]'>
                <Nav></Nav>

                <div data-aos="zoom-in-down" data-aos-duration="1500">
                    <div className='flex justify-center mt-[68px]'>
                        <img className='md:w-[30%]' src={img} alt="" />

                    </div>
                    <div className='flex justify-center items-center'>
                        <Link to="/" >

                            <p className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Go Home</span>
                                <span className="relative invisible">Go Home</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='-mt-[68px]'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Error;