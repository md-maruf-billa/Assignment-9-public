import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#3498db85]'>
            <footer className="grid grid-cols-4 gap-10 p-10  container mx-auto text-white *:grid">
                <nav className='col-span-4 lg:col-span-1'>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='size-[50px] md:size-[80px]' src="/logo.png" alt="" />
                        <h3 className='font-title tracking-[0.3rem] text-2xl md:text-4xl'><span className='text-[#3498db]'>Citizen</span> <br /> <span className='text-3xl'>Central</span></h3>
                    </div>
                </nav>
                <nav className='col-span-2 lg:col-span-1 text-center lg:text-left'>
                    <h6 className="font-title text-xl text-[#3498db]">Navigate</h6>
                    <Link to={"/"} className="link link-hover text-black font-semibold ">Home</Link>
                    <Link to={"/user-profile"} className=" text-black font-semibold link link-hover">Profile</Link>
                    <Link to={"/user-order"} className=" text-black font-semibold link link-hover">Order</Link>
                    <Link to={"/support"} className="link text-black font-semibold  link-hover">Support</Link>
                </nav>
                <nav className='col-span-2 lg:col-span-1 text-center lg:text-left'>
                    <h6 className="font-title text-xl text-[#3498db]">Legal</h6>
                    <a className="link text-black font-semibold link-hover">Terms of use</a>
                    <a className="link text-black font-semibold link-hover">Privacy policy</a>
                    <a className="link text-black font-semibold link-hover">Cookie policy</a>
                </nav>
                <form className='col-span-4 lg:col-span-1'>
                    <h6 className="font-title text-xl text-[#3498db]">Newsletter</h6>
                    <input className='bg-transparent outline-none border-b text-black border-black' type="text" placeholder='Enter Your Email' />
                    <button className="btn bg-[#3498db] border-none outline-none text-white mt-4">Subscribe</button>
                </form>
            </footer>
            <footer className="footer footer-center p-4 bg-[#3498db] text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Citizen Central || Design By- <span className='font-title text-white tracking-[0.1rem]'>Md Abu-Mahid Islam</span></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;