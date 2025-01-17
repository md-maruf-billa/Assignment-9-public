import React from 'react';
import PageTitle from '../../components/pageTitle/PageTitle';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TypeAnimation } from 'react-type-animation';

const Support = () => {
    const position = [51.505, -0.09]
    return (
        <div className=' min-h-[calc(100vh-380px)] mt-[68px] mb-10 md:mb-0 px-4 lg:px-0'>
            {/* ---------------Support Banner----------- */}
            <PageTitle title={"C.Central | Support"}></PageTitle>

            <div className='h-[300px] md:h-[500px] bg-[url(https://t3.ftcdn.net/jpg/02/16/47/48/360_F_216474896_GM9LpFdAQq8uHupenU7ayaSUxTNCco1i.jpg)] bg-no-repeat bg-cover flex justify-center items-center'>
                {/* <h1 className='text-white font-title text-4xl md:text-8xl md:tracking-[1rem]'>Support Center</h1> */}
                <TypeAnimation
                    className='text-white font-title text-4xl md:text-8xl md:tracking-[1rem]'
                    sequence={['Support Center', 500, 'Now we are 24/7', 500]}
                    repeat={Infinity}
                />
            </div>



            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 my-20'>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className='bg-[#f5f6f8] p-6 flex justify-center items-center flex-col text-center gap-3 rounded-lg'>
                    <h3 className='text-3xl'>Get Answer</h3>
                    <p>Having issue? Handy tutorials to help you solve your issue.</p>
                    <button className='btn bg-[#54a8e1] text-white border-none outline-none'>View All</button>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className='bg-[#f5f6f8] p-6 flex justify-center items-center flex-col text-center gap-3 rounded-lg'>
                    <h3 className='text-3xl'>Contact us</h3>
                    <p>If you have a big issue feel free to contact us. We try to solve it.</p>
                    <button className='btn bg-[#54a8e1] text-white border-none outline-none'>View All</button>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                    className='bg-[#f5f6f8] p-6 flex justify-center items-center flex-col text-center gap-3 rounded-lg'>
                    <h3 className='text-3xl'>FAQ</h3>
                    <p>Quick answer to frequently ask questions about our services and products.</p>
                    <button className='btn bg-[#54a8e1] text-white border-none outline-none'>View All</button>
                </div>
            </div>

            <div data-aos="zoom-in-up" data-aos-delay="900" data-aos-duration="1000">
                <h2 className='text-2xl md:text-5xl mb-10 text-center'>Still can't find what you need?</h2>
            </div>
            <div className=' flex flex-col-reverse lg:flex-row justify-center items-center gap-10 container mx-auto mb-10'>

                <section
                    data-aos="fade-right"
                    data-aos-delay="1000"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-sine"
                    className="px-6 py-12 bg-[#efefef] rounded-lg">
                    <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 px-10 rounded-md ">
                            <div className='flex justify-center items-center col-span-full mb-5'>
                                <h2 className='font-title text-center text-4xl text-[#3e9ddd]'>Give Your FeedBack</h2>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
                                <div className="col-span-full sm:col-span-3">
                                    <input id="firstname" type="text" placeholder="First name" className=" border-b outline-none border-black bg-transparent" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <input id="lastname" type="text" placeholder="Last name" className=" border-b outline-none border-black bg-transparent" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <input id="email" type="email" placeholder="Email" className=" border-b outline-none border-black bg-transparent" />
                                </div>
                                <div className="col-span-full">
                                    <input id="address" type="text" placeholder="Address" className=" border-b outline-none border-black bg-transparent" />
                                </div>
                                <div className="col-span-full">
                                    <textarea id="bio" placeholder="Write Your Message" className="w-full border-b outline-none border-black bg-transparent "></textarea>
                                </div>
                            </div>
                            <div className='flex justify-end col-span-full mt-5'>

                                <button className='btn bg-[#3498db] border-none outline-none text-white'>Submit</button>
                            </div>
                        </fieldset>
                    </form>
                </section>

                <div className='h-[450px] w-full lg:w-1/2' data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <MapContainer className='h-full z-0' center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                This is a demo Map create by using react leaflet <br /> Design By: Abu-Mahid
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Support;
