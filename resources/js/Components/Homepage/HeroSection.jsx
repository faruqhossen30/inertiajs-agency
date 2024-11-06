import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function HeroSection() {
    return (

        <div className="relative  overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] ">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-10 md:pt-16 lg:pt-24  md:pb-10">

                <div className="mt-5 max-w-5xl md:max-w-4xl 2xl:max-w-6xl text-center mx-auto">
                    <h1 className="block font-bold text-gray-800 text-[28px] sm:text-5xl md:text-[58px]  leading-9 md:leading-[60px] lg:leading-[75px] lg:text-[75px] xl:text-6xl 2xl:text-8xl dark:text-gray-200">

                        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent font-libre">Digital Marketing Agency</span>
                         <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"></span> Innovate Your World

                    </h1>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <p className="text-[16px] sm:text-sm sm:px-6 md:text-base md:px-63 lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 text-justify sm:text-center dark:text-gray-400 font-bold">Boost Your ROI with Top Digital Marketing! Choose boostcareit for expert strategies and   exceptional results. Exceptional Website Design & Development, Expert SEO &  Digital Marketing Strategies, Premier Graphics Design Services
                    </p>
                </div>


                <div className="mt-4 md:mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                    <Link className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 md:py-4 px-5 dark:focus:ring-offset-gray-800 text-xl" href="#">
                        Get started
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>

    )
}
