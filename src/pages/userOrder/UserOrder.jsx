import React, { useEffect, useState } from 'react';
import { rentFromLocalStorage, sellFromLocalStorage } from '../../utils/localStorage/LocalStorage';
import PageTitle from '../../components/pageTitle/PageTitle'
import useFetch from '../../utils/fetch-data/useFetchData';
import { Link } from 'react-router-dom';
const UserOrder = () => {
    const [displayData, setDisplayData] = useState([])
    const { allData } = useFetch("https://raw.githubusercontent.com/md-maruf-billa/My-all-API/main/mm-sites-api.json")
    const [switchTab, setSwitchTab] = useState(true);
    const rent = rentFromLocalStorage();
    const sell = sellFromLocalStorage();


    useEffect(() => {
        if (switchTab) {
            const match = allData.filter(data => rent.includes(data.id)) || [];
            setDisplayData(match);
        }
        else {
            const match = allData.filter(data => sell.includes(data.id));
            setDisplayData(match);
        }
    }, [allData, switchTab])

    return (

        <div className='min-h-[calc(100vh-345px)] mt-[70px]'>
            <PageTitle title={"C.Central || Order Cart"}></PageTitle>
            <div 
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className='h-[300px] md:h-[400px] flex justify-center items-center bg-no-repeat bg-cover bg-center object-contain bg-[linear-gradient(45deg,rgb(0,0,0,0.7),rgb(0,0,0,0.5)),url(https://i.postimg.cc/xThwprFb/Los-Angeles-Community-Center.jpg)]'>
                <h3 
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="500"
                className='font-title text-4xl md:text-7xl tracking-[0.7rem] text-[#3498db]'>Your Cart List</h3>
            </div>

            <div className="container mx-auto my-20">
                <div data-aos="fade-down" data-aos-duration="1000" className='w-1/4 mb-10'>
                    <div role="tablist" className="tabs tabs-lifted font-semibold">
                        <a onClick={() => setSwitchTab(true)} role="tab" className={`tab ${switchTab ? "tab-active" : ""}`}>Rent</a>
                        <a onClick={() => setSwitchTab(false)} role="tab" className={`tab ${switchTab ? "" : "tab-active"}`}>Sell</a>
                    </div>
                </div>



                {
                    switchTab ?
                        <div className="overflow-x-auto">
                            <table className='table' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                                <thead >
                                    <tr>
                                        <th>
                                            SL
                                        </th>
                                        <th >Estate Name</th>
                                        <th className='hidden md:block'>Facilities</th>
                                        <th>View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        displayData.map((data, idx) => 
                                        <tr key={idx}>
                                            <th>
                                                {idx + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div className='w-[190px]'>
                                                        <div className="font-bold">{data.estate_title}</div>
                                                        <div className="text-sm opacity-50">{data.location}</div>
                                                        <div className="text-sm font-semibold text-[#95c9ec]">{data.price}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='hidden md:block'>
                                                {data.segment_name}
                                                <br />
                                                <span className="badge badge-ghost badge-sm space-x-1">
                                                    <span># {data.facilities[0]}</span>
                                                    <span># {data.facilities[1]}</span>
                                                    <span># {data.facilities[2]}</span>

                                                </span>
                                            </td>

                                            <th>
                                                <Link to={`/details/${data.id}`} className="btn bg-[#3498db] text-white border-none outline-none btn-xs">details</Link>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>

                        </div>
                        :

                        <div 
                        className="overflow-x-auto">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>
                                            SL
                                        </th>
                                        <th >Estate Name</th>
                                        <th className='hidden md:block'>Job</th>
                                        <th>View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        displayData.map((data, idx) => <tr key={idx}>
                                            <th>
                                                {idx + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div className='w-[190px]'>
                                                        <div className="font-bold">{data.estate_title}</div>
                                                        <div className="text-sm opacity-50">{data.location}</div>
                                                        <div className="text-sm font-semibold text-[#95c9ec]">{data.price}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='hidden md:block'>
                                                {data.segment_name}
                                                <br />
                                                <span className="badge badge-ghost badge-sm space-x-1">
                                                    <span># {data.facilities[0]}</span>
                                                    <span># {data.facilities[1]}</span>
                                                    <span># {data.facilities[2]}</span>

                                                </span>
                                            </td>

                                            <th>
                                                <Link to={`/details/${data.id}`} className="btn bg-[#3498db] text-white border-none outline-none btn-xs">details</Link>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>

                        </div>
                }
            </div>


        </div>
    );
};

export default UserOrder;
