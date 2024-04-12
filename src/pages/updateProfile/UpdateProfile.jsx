import { updateProfile } from 'firebase/auth';
import React from 'react';
import auth from '../../utils/firebase/FireBase.confing';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const useNav = useNavigate();
    const reload = () => { window.location.reload() }
    const navigate = () => { useNav("/") }
    const handelUpdate = (e) => {
        e.preventDefault();
        const updatePromise = updateProfile(auth.currentUser, {
            displayName: e.target.name.value,
            photoURL: e.target.photoURL.value
        });
        toast.promise(
            updatePromise,
            {
                pending: 'Updating profile...', // Message shown while promise is pending
                success: 'Profile updated successfully', // Message shown on success
                error: 'Failed to update profile' // Message shown on error
            }
        );

        // Redirect after update
        updatePromise
            .then(() => {
                setTimeout(navigate, 1000);
                setTimeout(reload, 1000);
            })
            .catch(error => {
                console.error("Update failed:", error);
            })
    }

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className='min-h-[calc(100vh-370px)] mt-[68px] mb-10 md:mb-0 mx-auto container flex justify-center items-center px-2 md:px-0'>
            <div className='bg-[#efefef] px-10 md:px-14 py-20 rounded-lg' >
                <form onSubmit={handelUpdate}>
                    <h3 className='font-title text-4xl md:text-6xl text-[#3e9ddd]'>Update Your Profile</h3>
                    <div className='flex gap-1 flex-col mt-8'>
                        <input name='name' type="text" className='bg-transparent outline-none border-b-2' placeholder='Change name' />
                    </div>
                    <div className='flex gap-1 flex-col mt-6'>
                        <input name='photoURL' type="text" className='bg-transparent outline-none border-b-2' placeholder='Phot URL' />
                    </div>
                    <div className='flex justify-center items-center mt-10'>
                        <button type='submit' className='btn bg-[#3e9ddd] text-white'>Update Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;