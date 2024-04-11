import React, { useContext } from 'react';
import { userInfoContext } from '../../utils/authentication/UserAuth';
import { FaUser } from 'react-icons/fa6';

const UserProfile = () => {
    const { currentUser } = useContext(userInfoContext);
    return (
        <div className='min-h-[calc(100vh-370px)] mt-[68px] container mx-auto flex justify-center items-center'>
            <div className='bg-[#54a9e128] p-10 md:p-20 rounded-lg'>
                <div className='flex justify-center items-center'>
                    {
                        currentUser.photoURL?<img className='rounded-full' src={currentUser.photoURL} alt="" /> :
                            <div className='flex flex-col justify-center items-center'>
                                <FaUser className='text-6xl border-2 rounded-full p-1 border-black'></FaUser>
                                <small className='text-red-600'>Profile image not public</small>
                            </div>
                    }
                </div>

                <div className='mt-5 space-y-2'>
                    <p><span className='font-semibold'>Name:</span> {currentUser?.displayName ||"User Name Not Public"}</p>
                    <p><span className='font-semibold'>Email:</span> {currentUser?.email}</p>
                    <p><span className='font-semibold'>Email Verified:</span> {currentUser?.emailVerified ? "Verified" : "Not Verified"}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;