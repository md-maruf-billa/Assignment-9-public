import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({ data }) => {
    const {
        id,
        estate_title,
        segment_name,
        description,
        price,
        status,
        location,
        facilities,
        image
    } = data;
    return (
        <div className='flex flex-col md:flex-row items-center border p-6 rounded-2xl'>
            <div className='md:w-1/2 cursor-pointer'>
                <Link state={id} to={`details/${id}`}><img className='md:w-[300px] h-[250px] object-cover rounded-lg' src={image} alt="" /></Link>
            </div>
            <div className='md:w-1/2 space-y-3'>
                <h2 className='font-title text-[28px]'>{estate_title}</h2>
                <p><span className='font-semibold'>Segment Type:</span> <span className='bg-[rgba(35,190,10,0.05)] p-2 rounded-lg'>{segment_name}</span></p>
                <p className='text-justify'>{description.slice(0, 80)}....</p>
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
                <div className='flex justify-between items-center'>
                    <p className='bg-[rgba(50,142,255,0.15)] px-6 py-4 rounded-full text-[#328EFF]'>{price}</p>

                    <Link state={id} to={`details/${id}`}>

                        <p  className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Details</span>
                            <span className="relative invisible">View Details</span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;