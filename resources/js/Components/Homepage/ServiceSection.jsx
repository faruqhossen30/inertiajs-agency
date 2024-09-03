import { ArrowRightIcon, ServerStackIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { FaCode } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { SiAdobe } from "react-icons/si";
import { IoPhonePortrait } from "react-icons/io5";
import { MdBrandingWatermark } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import React from 'react'
import { Link } from '@inertiajs/react';

export default function ServiceSection({ categories }) {
    console.log(categories);

    return (
        <>
            <div className="container mx-auto">
                <div className="text-center py-10 space-y-5">
                    {/* <h1 className="text-5xl text-gray-800 font-bold">Innovative Business & Marketing Solutions</h1>
                    <p className="text-lg">Exceptional Website Design & Development, <br /> Expert SEO & Digital Marketing Strategies, Premier Graphics Design Services</p> */}
                </div>
                <div className="grid grid-cols-12 2xl:grid-cols-12 gap-8 py-10">
                    {categories.map((item, index) => {
                        return <div key={index} className="group col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3 2xl:col-span-3 border-2 border-gray-200 hover:border-blue-200 hover:shadow-blue-100 hover:scale-105 hover:transition-all duration-700 rounded-md shadow-lg ">
                            <div className="space-y-5 px-8 py-8 ">
                                <div className="flex justify-center">
                                    <img src={window.location.origin + '/storage/' + item.thumbnail} className="w-16 h-16" alt={item.name} />
                                </div>
                                <div className="flex justify-center">
                                    <span className="text-3xl sm:text-xl font-extrabold ">{item.name}</span>
                                </div>
                                <div className="flex justify-center text-center">
                                    <p className='text-md text-gray-800  font-medium'>
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex justify-center pb-2">
                                    {/* <a href="" className="text-start font-bold" >Read More..</a> */}
                                    {/* <a href="#" className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400">
                                        Learn More
                                    </a> */}
                                    <Link href={route('servicepage',{category: item.id})}  className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded border border-gray-400 text-gray-800 group-hover:border-blue-800 hover:text-gray-800 focus:outline-none focus:border-gray-800 focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-300 group-hover:bg-blue-500 group-hover:text-white group-hover:border-none ">
                                        View More
                                        <ArrowRightIcon className="w-4 hidden group-hover:block group-hover:transition-all duration-700" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>

        </>

    )
}
