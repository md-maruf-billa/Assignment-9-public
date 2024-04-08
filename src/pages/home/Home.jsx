import React from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import useFetch from '../../utils/fetch-data/useFetchData';
import ProductCard from '../../components/product-card/ProductCard';

const Home = () => {
    // -----Loading Data From Custom hook---------
    const { allData } = useFetch()

    return (
        <div>
            <div className='min-h-[calc(100vh-220px)]'>
                {/* ---------Nav Bar hare-------- */}
                <Nav></Nav>

                {/* --------Banner Section hare------ */}
                <Banner></Banner>
            </div>
            <div className='mt-10'>
                <p className='text-3xl md:text-7xl font-title text-center'>Our Best Services</p>


                <div className='gradient-bg'>
                    <div className='container mx-auto grid lg:grid-cols-2 gap-10 my-20 px-4 md:px-0'>
                        {
                            allData?.map(data => <ProductCard key={data.id} data={data}></ProductCard>)
                        }
                    </div>
                </div>
            </div>
            {/* ------Footer hare----- */}
            <Footer></Footer>
        </div>
    );
};

export default Home;