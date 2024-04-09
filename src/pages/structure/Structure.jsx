import React from 'react';
import {Outlet} from 'react-router-dom'
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';

const Structure = () => {
    return (
        <div className='font-common'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Structure;