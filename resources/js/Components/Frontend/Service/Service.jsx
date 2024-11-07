import { StarIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function Service({service}) {

    console.log(service);

    return (
        <div className="col-span-6 md:col-span-4">
            <Link href={route('single.service',service.slug)} className="flex flex-col group bg-white border shadow-sm rounded-md overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]" >
                <div className=" overflow-hidden">
                    <img className="w-full object-fill group-hover:scale-105 transition-transform duration-500 ease-in-out" src={service.thumbnail ? window.location.origin + '/storage/' + service.thumbnail : './marketing.png'} alt="Image Description" />
                </div>
                <div className="text-center">
                    <h3 className="text-lg px-5 font-Montserrat font-bold text-gray-800 dark:text-gray-400 py-3">
                        {service.title}
                    </h3>
                    <div className="text-center">
                        <div className="flex space-x-1 justify-center">
                            <StarIcon className="text-gray-800 dark:text-gray-400 h-4 w-4" />
                            <StarIcon className="text-gray-800 dark:text-gray-400 h-4 w-4" />
                            <StarIcon className="text-gray-800 dark:text-gray-400 h-4 w-4" />
                            <StarIcon className="text-gray-800 dark:text-gray-400 h-4 w-4" />
                            <StarIcon className="text-gray-800 dark:text-gray-400 h-4 w-4" />
                        </div>

                        <p className="text-sm py-2 text-gray-800 dark:text-gray-400">
                            <span className="font-bold">4.6</span> /5 - from {service.reviews?.count || 0} reviews
                        </p>
                    </div>

                </div>
                <div className="flex items-center justify-between p-3 border-t sm:px-5 dark:border-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-400">Start ${service.basic_price}</span>
                    <Link href={route('single.service',service.slug)} className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-gray-500 hover:text-white hover:bg-gray-500 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm  dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
                       View more
                    </Link>
                </div>
            </Link>
        </div>
    )
}
