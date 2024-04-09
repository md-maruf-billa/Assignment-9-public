import React, { useContext, useState } from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { userInfoContext } from '../../utils/authentication/UserAuth';
import { toast } from 'react-toastify';

const Registration = () => {
    const [passErr, setPassErr] = useState('');
    const [strongPass , setStrongPass] = useState("");
    const [successPass , setSuccessPass] = useState("")
    const navigate = useNavigate();
    const { signInWithEmail } = useContext(userInfoContext);
    const {
        register,
        handleSubmit,
    } = useForm()
    const handelRegister = (data) => {
        const email = data.email;
        signInWithEmail(email, strongPass)
            .then(result => {
                toast.success("SignUp Successful")
                navigate("/")
               
            })

    }
    const managePassword = (e) => {
        const password = e.target.value;
        if (password.length < 6) {
            setPassErr("Password should be more then 6 character");
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setPassErr("Must be need a lower case");

            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setPassErr("Must be need a Upper case");
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setPassErr("Must be need a number");
            return;
        }
        else if (!/(?=.*[!@#$%^&*()])/.test(password)) {
            setPassErr("Need a special character (!@#$%^&*())");
            return;
        }


        else {
            setPassErr("");
            setSuccessPass("your password is too strong")
            setStrongPass(password)
        }

    }
    return (
        <div className='min-h-screen container mx-auto flex  justify-center items-center  text-black' >
            <form onSubmit={handleSubmit(handelRegister)} className='bg-[#00000010] px-14 py-10 rounded-lg'>
                <h3 className='text-center font-title text-5xl mb-10'>Register Now</h3>

                <div className='flex flex-col w-[400px] gap-12 *:bg-transparent'>
                    <input {...register('firstName')} className='border-b-2 outline-none' type="text" placeholder='First Name' />
                    <input {...register('lastName')} className='border-b-2 outline-none' type="text" placeholder='Last Name' />
                    <input {...register('email')} className='border-b-2 outline-none' type="email" placeholder='Email' />
                    <input {...register('photoURL')} className='border-b-2 outline-none' type="text" placeholder='Photo URL' />

                    <input {...register('password')} onChange={managePassword} className='border-b-2 outline-none' type="password" placeholder='Password' />
                    {
                        passErr?<small className='-mt-10 text-red-600'>{passErr}</small>:
                        <small className='-mt-10 text-green-600'>{successPass}</small>
                    }
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
                <button type='submit' className='btn w-full bg-[#F9A51A] border-none outline-none mt-12'>Sign Up</button>
                <p className='text-center mt-4'>Already have an account? <Link className='text-blue-600' to={"/login"}>Login Now</Link></p>



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
        </div >


    );
};

export default Registration;










// {
//     pass && (
//         passError ? <small className='-mt-12 text-red-600'>Your Password too week</small> :
//             <small className='-mt-12 text-green-500'>Your Password is Strong</small>
//     )
// }