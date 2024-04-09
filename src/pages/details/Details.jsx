import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import useFetch from '../../utils/fetch-data/useFetchData';
import { MdLocationPin } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
const Details = () => {
    const [machData, setMachData] = useState([]);
    const currentLocation = useLocation()
    const { allData } = useFetch()
    useEffect(() => {
        const machData = allData?.find(data => data.id == currentLocation.state) || [];
        setMachData(machData)

    }, [allData])


    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        location,
        facilities,
        image
    } = machData;

    return (
        <div className='min-h-[calc(100vh-288px)] mt-[68px] container mx-auto lg:flex items-center gap-10 px-3 lg:px-0'>
            <div className='lg:w-1/2'>
                <img className='md:h-[600px] object-cover w-full rounded-md' src={image} alt="" />
            </div>
            <div className='lg:w-1/2 space-y-3 border p-6 rounded-md'>
                <h2 className='font-title text-4xl md:text-6xl'>{estate_title}</h2>
                <p className='lg:text-xl font-semibold'><span>Segment Name:</span> {segment_name}</p>
                <div className='flex justify-between font-semibold text-[#a855f7]'>
                    <p className='flex items-center gap-2'><FaSackDollar className='text-2xl'></FaSackDollar> {price}</p>
                    <p className='flex items-center gap-2'><MdLocationPin className='text-2xl'></MdLocationPin> {location}</p>
                    <p className='flex items-center gap-2'><GrStatusGood className='text-2xl'></GrStatusGood> {status}</p>
                </div>
                <p className='text-justify'>
                    <span className='font-semibold'>Description:</span> <br />
                    {description}
                </p>
                <hr />
                <div className='flex justify-between items-center flex-wrap gap-3'>
                    <p className='font-semibold'>Facilities:</p>
                    <p className='px-4 py-3 rounded-full bg-[#e0eeff] text-[#6f8eff]'><span>#</span> {facilities?.[0]}</p>
                    <p className='px-4 py-3 rounded-full bg-[#e0eeff] text-[#6f8eff]'><span>#</span> {facilities?.[1]}</p>
                    <p className='px-4 py-3 rounded-full bg-[#e0eeff] text-[#6f8eff]'><span>#</span> {facilities?.[2]}</p>
                </div>
                <div className='flex justify-center lg:justify-end items-center py-4'>
                    {
                        price == 'Not for sale' ? <button>
                            <a className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Add to Rent</span>
                                <span className="relative invisible">Add to Rent</span>
                            </a>
                        </button> :
                            <button>
                                <a className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Add to Buy</span>
                                    <span className="relative invisible">Add to Buy</span>
                                </a>

                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;