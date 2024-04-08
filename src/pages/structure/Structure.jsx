import React from 'react';
import {Outlet} from 'react-router-dom'

const Structure = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Structure;