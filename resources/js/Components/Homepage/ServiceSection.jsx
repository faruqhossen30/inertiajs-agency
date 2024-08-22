import { ArrowRightIcon, ServerStackIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { FaCode } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { SiAdobe } from "react-icons/si";
import { IoPhonePortrait } from "react-icons/io5";
import { MdBrandingWatermark } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import React from 'react'

export default function ServiceSection() {
    return (
        <>

            <div className="container mx-auto">
                <div className="text-center py-10 space-y-5">
                    <h1 className="text-5xl text-gray-800 font-bold">Professional Digital Marketing Services</h1>
                    <p className="text-md">Best Software Design & Development, Website Design & Development, Best SEO Agency <br />
                        & Digital Marketing,  and Graphics Company of Bangladesh.</p>
                </div>
                <div className="grid grid-cols-12 2xl:grid-cols-10 gap-8 py-10">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        return <div key={index} className="group col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-2 border-2 border-gray-200 hover:border-blue-200 hover:shadow-blue-100 hover:scale-105 hover:transition-all duration-700 rounded-md shadow-lg ">
                            <div className="space-y-5 px-8 py-3">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-16 w-16 text-[#FF543E] font-thin">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                </div>
                                <div className="flex justify-center">
                                    <span className="text-5xl font-extrabold ">SEO</span>
                                </div>
                                <div className="flex justify-center text-center">
                                    <p className='text-md text-gray-800  font-medium'>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio dolore, labore consequuntur veritatis ab modi eaque aperiam fugiat consequatur repellendus?
                                    </p>
                                </div>
                                <div className="flex justify-center pb-2">
                                    {/* <a href="" className="text-start font-bold" >Read More..</a> */}
                                    {/* <a href="#" class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400">
                                        Learn More
                                    </a> */}
                                    <button type="button" class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded border border-gray-400 text-gray-800 group-hover:border-blue-800 hover:text-gray-800 focus:outline-none focus:border-gray-800 focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-300 group-hover:bg-blue-500 group-hover:text-white group-hover:border-none ">
                                        View More
                                        <ArrowRightIcon className="w-4 hidden group-hover:block group-hover:transition-all duration-700" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>

        </>

    )
}
