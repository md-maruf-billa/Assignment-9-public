import React from 'react';
import { Link } from 'react-router-dom';
import './productCard.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const ProductCard = ({ data }) => {
    const {
        id,
        estate_title,
        segment_name,
        price,
        status,
        location,
        facilities,
        image
    } = data;
    return (
        <div data-aos="zoom-in-up" data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000">
            <div className='flex flex-col md:flex-row items-center border p-6 rounded-2xl shadow-lg hover:scale-105'>
                <div className="md:w-1/2 cursor-pointer ">
                    <div className='box'>
                        <Link state={id} to={`details/${id}`}><img className='md:w-[300px] h-[250px] object-cover rounded-lg' src={image} alt="" /></Link>
                        <div class="ribbon ribbon-top-right size-[150px] hidden lg:block"><span className='text-xs lg:text-base font-semibold'>{price}</span></div>
                    </div>
                </div>
                <div className='md:w-1/2 space-y-3'>
                    <h2 className='font-title text-[28px]'>{estate_title}</h2>
                    <p><span className='font-semibold'>Segment Type:</span> <span className='bg-[rgba(35,190,10,0.05)] p-2 rounded-lg'>{segment_name}</span></p>
                    <hr />
                    <div className='flex justify-between items-center'>
                        <p><span className='font-semibold'>Status:</span> {status}</p>
                        <p><span className='font-semibold'>Location:</span> {location}</p>
                    </div>
                    <hr />
                    <div className='flex-wrap gap-2 text-xs items-center hidden md:flex'>
                        <p className='font-semibold'>Facilities:</p>
                        <p className='bg-[rgba(255,172,51,0.15)] py-2 px-4 rounded-full'>{facilities?.[0]}</p>
                        <p className='bg-[rgba(255,172,51,0.15)] py-2 px-4 rounded-full'>{facilities?.[1]}</p>


                    </div>
                    <hr className='hidden md:block' />
                    <div className='flex justify-between lg:justify-end items-center'>
                        <p className='font-semibold border px-4 py-2 rounded-lg bg-[#3498db2a] lg:hidden'>{price}</p>
                        <Link state={id} to={`details/${id}`}>

                            <a href="#_" class="inline-block px-5 py-2 mx-auto text-white bg-[#3498db] font-semibold rounded-full hover:bg-blue-700 md:mx-0">
                                See Details
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;