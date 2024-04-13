import React from 'react';
import PageTitle from '../../components/pageTitle/PageTitle';

const Support = () => {
    return (
        <div className=' min-h-[calc(100vh-380px)] mt-[68px] mb-10 md:mb-0'>
            {/* ---------------Support Banner----------- */}
            <PageTitle title={"C.Central | Support"}></PageTitle>

            <div className='h-[300px] md:h-[500px] bg-[url(https://t3.ftcdn.net/jpg/02/16/47/48/360_F_216474896_GM9LpFdAQq8uHupenU7ayaSUxTNCco1i.jpg)] bg-no-repeat bg-cover flex justify-center items-center'>
                <h1 className='text-white font-title text-4xl md:text-8xl tracking-[1rem]'>Support Center</h1>
            </div>



            <div className='container mx-auto grid grid-cols-1  md:grid-cols-3 gap-8 my-20'>
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

                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className='flex justify-center items-center'>
                    <iframe className='rounded-lg w-[400px] md:w-[600px] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.97303512554!2d90.33728842456533!3d23.780818635643442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1712944121239!5m2!1sen!2sbd" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Support;
