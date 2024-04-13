import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import auth from '../../utils/firebase/FireBase.confing';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { userInfoContext } from '../../utils/authentication/UserAuth';
import PageTitle from '../../components/pageTitle/PageTitle';

const UpdateProfile = () => {
    const { currentUser,setReRender } = useContext(userInfoContext);
    const useNav =  useNavigate();
    const redirectUser =()=> useNav("/user-profile")
    const handelUpdate = (e) => {
        e.preventDefault();
        const updatePromise =  updateProfile(
            auth.currentUser, {
            displayName: e.target.name.value ? e.target.name.value : e.target.name.placeholder,
            photoURL: e.target.photoURL.value ? e.target.photoURL.value : e.target.photoURL.placeholder
            
        })
        
        toast.promise(
            updatePromise,
            {
                success: 'Profile updated successfully',
            }
        );
        updatePromise
            .then(() => {
                setReRender(true)
                setTimeout(redirectUser , 1000)
            })
            .catch(error => {
                toast.warn("Update failed:", error);
                console.log(error)
            })
    }

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className='min-h-[calc(100vh-345px)] mt-[68px] mb-10 md:mb-0 mx-auto container flex  justify-center items-center px-2 md:px-0'>
            <PageTitle title={"C.Central | Update Profile"}></PageTitle>
            <div className='bg-[#efefef] px-10 md:px-14 py-20 rounded-lg border-2 border-[#3e9ddd]' >
                <form onSubmit={handelUpdate}>
                    <h3 className='font-title text-4xl md:text-6xl text-[#3e9ddd]'>Update Your Profile</h3>
                    <div className='flex gap-1 flex-col mt-8'>
                        <p className='font-semibold text-[#3e9ddd]'>Name</p>
                        <input name='name' type="text" className='bg-transparent outline-none border-b-2' placeholder={currentUser?.displayName} />
                    </div>
                    <div className='flex gap-1 flex-col mt-6'>
                        <span className='flex items-center gap-2'>
                            <p className='font-semibold text-[#3e9ddd]'>Email</p>
                            <small className='text-red-600'>(Not changeable)</small>
                        </span>
                        <input name='email' type="text" className='bg-transparent outline-none border-b-2' readOnly value={currentUser?.email || 'Email Not Public'} />
                    </div>
                    <div className='flex gap-1 flex-col mt-6'>
                        <p className='font-semibold text-[#3e9ddd]'>PhotoURL</p>
                        <input name='photoURL' type="text" className='bg-transparent outline-none border-b-2' placeholder={currentUser?.photoURL} />
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