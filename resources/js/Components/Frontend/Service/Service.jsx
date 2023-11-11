import { StarIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Service() {
    return (
        <div className="col-span-6 md:col-span-4 px-2 py-1">
            <a class="flex flex-col group bg-white border shadow-sm rounded-md overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]" href="#">
                <div class="relative pt-[50%] max-h-50 sm:pt-[60%] lg:pt-[80%] overflow-hidden">
                    <img class="w-full max-h-50 absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src="./seo.png" alt="Image Description" />
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                        SEO keyword research and
                        competitors analysis
                    </h3>
                    <div className="text-center">
                        <div class="flex space-x-1 justify-center">
                            <StarIcon className="h-4 w-4" />
                            <StarIcon className="h-4 w-4" />
                            <StarIcon className="h-4 w-4" />
                            <StarIcon className="h-4 w-4" />
                            <StarIcon className="h-4 w-4" />
                        </div>

                        <p class="mt-3 text-sm text-gray-800 dark:text-gray-200">
                            <span class="font-bold">4.6</span> /5 - from 12k reviews
                        </p>
                    </div>

                </div>
                <div class="flex items-center justify-between p-4 border-t sm:px-5 dark:border-gray-700">
                    <span className=" font-bold">Start $10</span>
                    <button type="button" className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-gray-500 hover:text-white hover:bg-gray-500 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm  dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
                        Order Now !
                    </button>
                </div>
            </a>
        </div>
    )
}
