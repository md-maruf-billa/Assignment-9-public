import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center container mx-auto text-black'>
            <form className='bg-[#00000010] px-14 py-10 rounded-lg'>
                <h3 className='text-center font-title text-5xl mb-10'>Login Now</h3>

                <div className='flex flex-col w-[400px] gap-12 *:bg-transparent'>
                    <input className='border-b-2 outline-none' type="email" placeholder='Username or Email' />
                    <input className='border-b-2 outline-none' type="password" placeholder='Password' />
                </div>
                <div className='flex justify-between mt-6'>
                    <div className='flex items-center gap-2'>
                        <input className='cursor-pointer' type="checkbox" name="" />
                        <p>Remember Me</p>
                    </div>
                    <div>
                        <Link>Forget Password?</Link>
                    </div>
                </div>
                <button type='submit' className='btn w-full bg-[#F9A51A] border-none outline-none mt-12'>Login</button>
                <p className='text-center mt-4'>Don’t have an account? <Link className='text-blue-600' to={"/registration"}>Create an account</Link></p>



                <div className='flex items-center gap-2 mt-5'>
                    <div className='border-2 w-1/2 h-[1px]'></div>
                    <p>OR</p>
                    <div className='border-2 w-1/2 h-[1px]'></div>
                </div>
                <div className='flex gap-5 justify-center items-center mt-5'>
                    <FcGoogle className='text-4xl cursor-pointer'></FcGoogle>
                    <FaFacebook className='text-4xl cursor-pointer text-blue-600'></FaFacebook>
                </div>
            </form>
        </div>
    );
};

export default Login;