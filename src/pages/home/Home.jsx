import React from 'react';
import Banner from '../../components/banner/Banner';
import useFetch from '../../utils/fetch-data/useFetchData';
import ProductCard from '../../components/product-card/ProductCard';
import Networks from '../../components/network/Networks';

const Home = () => {
    // -----Loading Data From Custom hook---------
    const { allData } = useFetch('https://raw.githubusercontent.com/md-maruf-billa/My-all-API/main/mm-sites-api.json')

    return (
        <div>
            <div className='min-h-[calc(100vh-220px)]'>
                {/* --------Banner Section hare------ */}
                <Banner></Banner>
            </div>
            <div className='mt-10'>
                <p data-aos="fade-up" className='text-3xl md:text-6xl font-title text-center cursor-pointer'>Our Best Services</p>
                <div data-aos="zoom-in-up" className='w-1/4 border-4 border-[#1f2937] mx-auto hover:w-1/3 cursor-pointer'></div>


                <div className='gradient-bg'>
                    <div className='container mx-auto grid lg:grid-cols-2 gap-10 my-20 px-4 md:px-0'>
                        {
                            allData?.map(data => <ProductCard key={data.id} data={data}></ProductCard>)
                        }
                    </div>
                </div>
            </div>
            <div className="my-20 pt-10">
                <Networks></Networks>
            </div>
        </div>
    );
};

export default Home;