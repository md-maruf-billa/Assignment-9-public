import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import useFetch from '../../utils/fetch-data/useFetchData';
// import required modules
import { EffectCreative } from 'swiper/modules';
import { FaLocationDot, FaStar } from 'react-icons/fa6';

export default function NetworkForMdDevice() {
    const { allData } = useFetch('https://raw.githubusercontent.com/md-maruf-billa/My-all-API/main/all-clients-data.json');
    return (
        <>
            <h3 data-aos="zoom-in-up" data-aos-duration="1500" className='text-3xl text-[#3498db] md:text-6xl font-title text-center cursor-pointer'>Our Ratings</h3>
            <div data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="1500" className='w-1/4 border-4 border-[#3498db] mx-auto hover:w-1/3 cursor-pointer mb-5'></div>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-125%', 0, -800],
                        rotate: [0, 0, -90],
                    },
                    next: {
                        shadow: true,
                        translate: ['125%', 0, -800],
                        rotate: [0, 0, 90],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper5"
            >
                {
                    allData.map(data =>

                        <SwiperSlide key={data.id} data={data}>
                            <div className="md:h-[700px] rounded-lg flex justify-center items-center" style={{ backgroundColor: data.color }}>

                                <section data={data} className="p-6">
                                    <div className="container max-w-xl mx-auto">
                                        <div className="flex flex-col items-center w-full p-4 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
                                            <img src={data.image} alt="" className="size-[200px] rounded-full dark:bg-gray-500" />
                                            <h3 className="text-2xl">{data.client_name}</h3>
                                            <blockquote className="max-w-lg text-lg italic font-medium text-center">"{data.review}"</blockquote>
                                            <div className="text-center dark:text-gray-600">
                                                <p className='flex items-center gap-3'><FaStar className='text-xl text-amber-400'></FaStar> <span className='font-semibold'>Ratings:</span >{data.ratings}</p>
                                                <p className='flex items-center gap-3'><FaLocationDot className='text-xl text-red-600'></FaLocationDot><span className='font-semibold'>Location:</span>{data.location}</p>

                                            </div>

                                        </div>
                                    </div>
                                </section>



                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>

        </>
    );
}
