import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userInfoContext } from '../../utils/authentication/UserAuth';
import {toast} from 'react-toastify'
const Nav = () => {
    const { currentUser, loading, LogOutUser } = useContext(userInfoContext);

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
        <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
        <li><NavLink to={"/update-profile"}>Update Profile</NavLink></li>
        <li><NavLink to={"/user-profile"}>User Profile</NavLink></li>
    </>
    return (
        <div className='bg-[#00000062] fixed w-full top-0 z-50'>
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
                    <Link to="/" className=" text-3xl font-light tracking-[0.7rem] font-title hidden md:block mt-2 hover:rounded-lg hover:border py-2 px-1">C.Central</Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav_Link}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        currentUser.email ?
                            <div className='flex justify-center items-center gap-3'>
                                <div className="tooltip tooltip-bottom" data-tip={`${currentUser.email}`}>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <button onClick={handelLogOut} className='btn btn-outline text-white'>Log Out</button>
                            </div>
                            :
                            <Link to={"/login"} className='tooltip-top btn btn-warning font-semibold'>Login</Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Nav;