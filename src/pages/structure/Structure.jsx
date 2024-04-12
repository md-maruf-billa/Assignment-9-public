import React from 'react';
import {Outlet} from 'react-router-dom'
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Structure = () => {
    return (
        <div className='font-common'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer 
            autoClose={1000}
            position="top-center"
            />
        </div>
    );
};

export default Structure;