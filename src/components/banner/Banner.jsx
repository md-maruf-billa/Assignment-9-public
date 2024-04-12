import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useFetch from '../../utils/fetch-data/useFetchData';
import { FaArrowDownLong } from 'react-icons/fa6';
import { LuMoveDown } from 'react-icons/lu';
const Banner = () => {
    const { allData } = useFetch('https://raw.githubusercontent.com/md-maruf-billa/My-all-API/main/mm-sites-api.json');
    // console.log(allData)
    return (
        <div 
            data-aos="zoom-in-up"
            data-aos-duration="1500"
        >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[50vh]"
            >
                {
                    allData.map(data =>
                        <SwiperSlide key={data.id}>
                            <div className='relative'>
                                <img className='bg-cover object-fill h-[50vh] w-full' src={data.image} alt="" />
                                <div className='absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000091] rounded-lg p-10 text-center'>
                                    <h1 className='font-title text-7xl text-[#fff]'>{data.estate_title}</h1>
                                    <p className='text-[#e7e6e6]'>{data.description.slice(0, 50)}....</p>

                                    <div className='text-white flex flex-col justify-center items-center'>
                                        <LuMoveDown className='text-4xl' />
                                        <small className='text-[#3498db]'>Scroll</small>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </div>
    );
};

export default Banner;