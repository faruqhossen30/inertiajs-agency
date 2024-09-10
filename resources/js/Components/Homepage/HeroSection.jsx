import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function HeroSection() {
    return (

        <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] ">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                <div className="mt-5 max-w-5xl text-center mx-auto">
                    <h1 className="block font-bold text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-[80px] dark:text-gray-200">

                        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Digital Marketing Agency</span>
                         <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">  </span> Innovate Your World

                    </h1>
                </div>


                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <p className="text-[16px] text-gray-600 dark:text-gray-400 font-bold">Boost Your ROI with Top Digital Marketing! Choose boostcareit for expert strategies and  <br /> exceptional results. Exceptional Website Design & Development, Expert SEO & <br /> Digital Marketing Strategies,  Premier Graphics Design Services
                    </p>
                </div>


                <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                    <Link className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-4 px-5 dark:focus:ring-offset-gray-800 text-xl" href="#">
                        Get started
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>

    )
}
