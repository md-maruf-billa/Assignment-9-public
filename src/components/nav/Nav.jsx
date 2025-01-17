import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userInfoContext } from '../../utils/authentication/UserAuth';
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';
const Nav = () => {
    const { currentUser, LogOutUser } = useContext(userInfoContext);
    const handelLogOut = () => {
        LogOutUser()
            .then(result => {
                toast.success('Successfully LogOut!');
            })
            .catch(err => {
                toast.warn('Log Out Failed!');
            })
    }
    const nav_Link = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        {
            currentUser ? <li><NavLink to={"/user-order"}>Order</NavLink></li> : <></>
        }

        <li><NavLink to={"/user-profile"}>User Profile</NavLink></li>
        {
            currentUser ? <li><NavLink to={"/update-profile"}>Update Profile</NavLink></li> : <></>
        }
        <li><NavLink to={"/support"}>Support</NavLink></li>
    </>
    return (
        <div className='bg-[#3498dbf3] fixed w-full top-0 z-50'>
            <div className="navbar bg-transparent container mx-auto text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 text-black z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {nav_Link}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='size-10 hidden md:block' src='/logo.png' alt="" />
                        <TypeAnimation
                            sequence={['C.Citizen', 500, 'Citizen', 500, 'Central', 500]}
                            className='font-title text-3xl tracking-[0.7rem] hidden lg:block'
                            repeat={Infinity}
                        />
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav_Link}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        currentUser ?
                            <div className='flex justify-center items-center gap-3'>
                                <div className="tooltip tooltip-bottom" data-tip={`${currentUser?.displayName || 'Display name not found'}`}>
                                    <div className="flex justify-center items-center">
                                        <div className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full flex justify-center items-center">
                                                {
                                                    currentUser?.photoURL ?
                                                        <img alt="user photo" src={currentUser?.photoURL} /> :
                                                        <FaUser className='text-3xl mt-1 ml-1  text-black'></FaUser>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <button onClick={handelLogOut} className='btn btn-outline text-white'>Log Out</button>
                            </div>
                            :
                            <Link to={"/login"} className='tooltip-top btn btn-outline text-white font-semibold'>Login</Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Nav;