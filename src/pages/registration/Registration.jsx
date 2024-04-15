import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { userInfoContext } from '../../utils/authentication/UserAuth';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import auth from '../../utils/firebase/FireBase.confing';
import PageTitle from '../../components/pageTitle/PageTitle';

const Registration = () => {
    const navigate = useNavigate();
    const redirectUser = () => navigate("/user-profile")
    const [passErr, setPassErr] = useState('');
    const [strongPass, setStrongPass] = useState("");
    const [successPass, setSuccessPass] = useState("")
    const { signInWithEmail,setReRender } = useContext(userInfoContext);
    const {
        register,
        handleSubmit,
    } = useForm()
    const handelRegister = (data) => {
        const email = data.email;
        signInWithEmail(email, strongPass)
            .then(result => {
                toast.success("SignUp Successful");
                updateProfile(auth.currentUser, {
                    displayName: data.firstName + " " + data.lastName, photoURL: data.photoURL
                }).then(() => {
                    setReRender(true);
                    setTimeout(redirectUser,1000)
                }).catch((error) => {
                });

            })
            .catch(error => {
                const err = error.message.split("/")[1].replace(")", "");
                toast.warn(err)
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
        <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className='min-h-screen container mx-auto flex  justify-center items-center  text-black px-3 md:px-0 my-5' >
            <PageTitle title={"C.Central | Registration"}></PageTitle>
            <form onSubmit={handleSubmit(handelRegister)} className='bg-[#00000010] px-10 md:px-14 py-10 rounded-lg border-2 border-[#3e9ddd]'>
                <h3 className='text-center font-title text-5xl mb-10 text-[#3e9ddd]'>Register Now</h3>

                <div className='flex flex-col md:w-[400px] gap-12 *:bg-transparent'>
                    <input {...register('firstName')} className='border-b-2 outline-none' type="text" placeholder='First Name' />
                    <input {...register('lastName')} className='border-b-2 outline-none' type="text" placeholder='Last Name' />
                    <input {...register('email')} className='border-b-2 outline-none' type="email" placeholder='Email' required />
                    <input {...register('photoURL')} className='border-b-2 outline-none' type="text" placeholder='Photo URL' />

                    <input {...register('password')} onChange={managePassword} className='border-b-2 outline-none' required type="password" placeholder='Password' />
                    {
                        passErr ? <small className='-mt-10 text-red-600'>{passErr}</small> :
                            <small className='-mt-10 text-green-600'>{successPass}</small>
                    }
                </div>
                <div className='flex justify-between mt-6'>
                    <div className='flex items-center gap-2'>
                        <input className='text-xs md:text-base cursor-pointer' type="checkbox" name="" />
                        <p>Remember Me</p>
                    </div>
                    <div>
                        <Link className='text-xs md:text-base text-[#3e9ddd]'>Forget Password?</Link>
                    </div>
                </div>
                <button type='submit' className='btn w-full bg-[#3e9ddd] text-white border-none outline-none mt-12'>Sign Up</button>
                <p className='text-center mt-4'>Already have an account? <Link className='text-[#3e9ddd]' to={"/login"}>Login Now</Link></p>

            </form>
        </div >


    );
};

export default Registration;
