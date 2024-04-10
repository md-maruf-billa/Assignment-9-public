import React, { useContext } from 'react';
import { userInfoContext } from '../utils/authentication/UserAuth';
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRouts = ({ children }) => {
    const location = useLocation();
    const { currentUser,loading } = useContext(userInfoContext);

    if (loading) {
        return <div className='h-screen flex justify-center items-center'><div className="loader"></div></div>
    }
    if (currentUser) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default PrivetRouts;