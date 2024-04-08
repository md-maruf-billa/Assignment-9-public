import React from 'react';
import {Outlet} from 'react-router-dom'

const Structure = () => {
    return (
        <div className='font-common'>
            <Outlet></Outlet>
        </div>
    );
};

export default Structure;