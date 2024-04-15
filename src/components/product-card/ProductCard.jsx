import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className='flex flex-col items-center border p-6 rounded-2xl shadow-lg  hover:border-[#3e9ddd]'>
                <div className=" cursor-pointer ">
                    <div className='box'>
                        <Link state={id} to={`details/${id}`}><img className=' md:w-[270px] lg:w-[443px] object-fill md:h-[160px] lg:h-[264px] rounded-lg' src={image} alt="" /></Link>
                    </div>
                </div>
                <div className='w-full space-y-3 mt-4'>
                    <h2 className='font-title text-2xl md:text-xl lg:text-[25px] md:tracking-[0.08rem]'>{estate_title}</h2>
                    <p className='text-xs'><span className='font-semibold'>Segment Type:</span> <span className='bg-[rgba(35,190,10,0.05)] p-2 rounded-lg'>{segment_name}</span></p>
                    <hr />
                    <div className='flex justify-between items-center'>
                        <p className='text-xs'><span className='font-semibold'>Status:</span> {status}</p>
                        <p className='text-xs'><span className='font-semibold'>Location:</span> {location}</p>
                    </div>
                    <hr />
                    <div className='flex-wrap gap-2 text-xs items-center hidden lg:flex'>
                        <p className='font-semibold'>Facilities:</p>
                        <p className='bg-[rgba(255,172,51,0.15)] py-2 px-4 rounded-full'>{facilities?.[0]}</p>
                        <p className='bg-[rgba(255,172,51,0.15)] py-2 px-4 rounded-full'>{facilities?.[1]}</p>


                    </div>
                    <hr className='hidden lg:block' />
                    <div className='flex justify-between items-center text-xs'>
                        <p className='font-semibold border px-4 py-2 rounded-lg bg-[#3498db2a]'>{price}</p>
                        <Link state={id} to={`details/${id}`}>

                            <button  className="inline-block px-5 py-2 mx-auto text-white bg-[#3498db] font-semibold rounded-lg hover:bg-blue-700 md:mx-0">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;