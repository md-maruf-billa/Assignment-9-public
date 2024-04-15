import React from 'react';
import Banner from '../../components/banner/Banner';
import useFetch from '../../utils/fetch-data/useFetchData';
import ProductCard from '../../components/product-card/ProductCard';
import Networks from '../../components/network/Networks';
import NetworkForMdDevice from '../../components/network/NetworkForMdDevice';
import PageTitle from '../../components/pageTitle/PageTitle';


const Home = () => {
    // -----Loading Data From Custom hook---------
    const { allData } = useFetch('https://raw.githubusercontent.com/md-maruf-billa/My-all-API/main/mm-sites-api.json')

    return (
        <div className='px-4'>
            <PageTitle title={"Citizen Central"}></PageTitle>
            <div className='h-[50vh] lg:h-[100vh]  mt-[70px]'>
                {/* --------Banner Section hare------ */}
                <Banner></Banner>
            </div>
            <div className='mt-10 container mx-auto'>
                <p data-aos="fade-up" className='text-3xl md:text-6xl text-[#3498db] font-title text-center cursor-pointer'>Our Best Services</p>
                <div data-aos="zoom-in-up" className='w-1/4 border-4 border-[#3498db] mx-auto hover:w-1/3 cursor-pointer'></div>


                <div className='gradient-bg'>
                    <div  className=' grid gid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                        {
                            allData?.map(data => <ProductCard key={data.id} data={data}></ProductCard>)
                        }
                    </div>
                </div>
            </div>
            <div className="my-20 pt-10">
                <div className='hidden lg:block'>
                    <Networks></Networks>
                </div>
                <div className='lg:hidden'>
                    <NetworkForMdDevice></NetworkForMdDevice>
                </div>
            </div>
        </div>
    );
};

export default Home;