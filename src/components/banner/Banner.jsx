import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='min-h-screen bg-[linear-gradient(180deg,rgba(0,0,0,0.70),rgba(0,0,0,0.20)),url(https://i.postimg.cc/SQf2VwYw/main-MS-bg.png)] bg-no-repeat bg-cover flex justify-center items-center'>
            <div className="container mx-auto">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex justify-center items-center text-white'>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-9xl font-title text-center leading-[140px]'>
                                    Welcome to the <br />
                                    State of Mississippi <br />
                                    Citizen Portal
                                </h1>
                                <div className='flex flex-col justify-center items-center gap-5'>
                                    <Link to={"/registration"} className='btn bg-transparent text-white text-xl'>Create Your MM.GOV Account</Link>
                                    <small>Already Have Account? <Link to={"/login"} className='text-base underline'>Login</Link></small>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' p-8 rounded-3xl'>
                            <div>
                                <div className='h-[50vh]'>
                                    <img className='h-full' src="https://i.postimg.cc/pyMFhHmZ/man2.png" alt="" />
                                </div>
                                <div></div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' p-8 rounded-3xl'>
                            <div>
                                <div className='h-[50vh]'>
                                    <img className='h-full' src="https://i.postimg.cc/pyMFhHmZ/man2.png" alt="" />
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-8 rounded-3xl'>
                            <div>
                                <div className='h-[50vh]'>
                                    <img className='h-full' src="https://i.postimg.cc/pyMFhHmZ/man2.png" alt="" />
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>





    );
};

export default Banner;