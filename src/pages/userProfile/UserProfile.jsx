import React, { useContext } from 'react';
import { userInfoContext } from '../../utils/authentication/UserAuth';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaEdit, } from 'react-icons/fa';
import PageTitle from '../../components/pageTitle/PageTitle';

const UserProfile = () => {
    const { currentUser } = useContext(userInfoContext);
    return (
        <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className='min-h-[calc(100vh-370px)] mt-[68px] container mx-auto flex justify-center items-center mb-10 md:mb-0'>
            <PageTitle title={"C.Central | User Profile"}></PageTitle>
            <div className='bg-[#efefef] p-10 md:p-20 rounded-lg'>
                <h3 className='font-title text-5xl md:text-6xl text-center text-[#3e9ddd] mb-8'>Your Profile</h3>
                <div className='flex justify-center items-center'>
                    {
                        currentUser.photoURL ? <img className='size-[150px] rounded-full' src={currentUser.photoURL} alt="" /> :
                            <div className='flex flex-col justify-center items-center'>
                                <FaUser className='text-6xl border-2 rounded-full p-1 border-black'></FaUser>
                                <small className='text-red-600'>Profile image not public</small>
                            </div>
                    }
                </div>

                <div className='mt-5 space-y-2'>
                    <p><span className='font-semibold text-[#3e9ddd]'>Name:</span> {currentUser?.displayName || "User Name not public"}</p>
                    <p><span className='font-semibold text-[#3e9ddd]'>Email:</span> {currentUser?.email || "User Email not public"}</p>
                    <p><span className='font-semibold text-[#3e9ddd]'>Email Verified:</span> {currentUser?.emailVerified ? "Verified" : "Not Verified"}</p>
                </div>
                <div className='flex justify-center items-center mt-8 '>
                    <Link to={"/update-profile"} className='btn bg-[#3e9ddd] text-white'><FaEdit></FaEdit>Edit Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;