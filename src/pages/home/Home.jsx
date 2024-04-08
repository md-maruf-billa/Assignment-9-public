import React from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';

const Home = () => {
    return (
        <div>
            <div className='min-h-[calc(100vh-220px)]'>
                {/* ---------Nav Bar hare-------- */}
                <Nav></Nav>

                {/* --------Banner Section hare------ */}
                <Banner></Banner>
            </div>
            <div className='mt-10'>
                <p className='text-5xl font-title text-center'>Our Best Services</p>


                <div>
                    
                </div>
            </div>
            {/* ------Footer hare----- */}
            <Footer></Footer>
        </div>
    );
};

export default Home;