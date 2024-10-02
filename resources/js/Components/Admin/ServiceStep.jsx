import { Link } from '@inertiajs/react'
import React from 'react'

const ServiceStep = ({service}) => {




    return (

        <div className='px-5 py-5 border rounded bg-white'>
            <ul className="relative flex flex-row gap-x-2">

            <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <Link href={route('service.edit', service.id)} className="group min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                        <span className="group-hover:text-indigo-600 group-hover:font-bold size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
                            1
                        </span>
                        <span className="group-hover:text-indigo-600 group-hover:font-bold ms-2 block text-sm font-medium text-gray-800 dark:text-white">
                            Description
                        </span>
                    </Link>
                    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
                </li>



                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <Link href={route('service.package.create', service.id)} className="group min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                        <span className={`group-hover:text-indigo-600 group-hover:font-bold size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white`}>
                            2
                        </span>
                        <span className="group-hover:text-indigo-600 group-hover:font-bold ms-2 block text-sm font-medium text-gray-800 dark:text-white">
                            Packages
                        </span>
                    </Link>
                    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
                </li>

                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <Link href={route('service.feature.create', service.id)} className="group min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                        <span className="group-hover:text-indigo-600 group-hover:font-bold size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
                            3
                        </span>
                        <span className="group-hover:text-indigo-600 group-hover:font-bold ms-2 block text-sm font-medium text-gray-800 dark:text-white">
                            Features
                        </span>
                    </Link>
                    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
                </li>

                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <Link href={route('service.additional-feature.create', service.id)} className="group min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                        <span className="group-hover:text-indigo-600 group-hover:font-bold size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
                            3
                        </span>
                        <span className="group-hover:text-indigo-600 group-hover:font-bold ms-2 block text-sm font-medium text-gray-800 dark:text-white">
                            Additional Features
                        </span>
                    </Link>
                    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
                </li>
                <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                    <Link href={route('service.faq.create', service.id)} className="group min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                        <span className="group-hover:text-indigo-600 group-hover:font-bold size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
                            4
                        </span>
                        <span className="group-hover:text-indigo-600 group-hover:font-bold ms-2 block text-sm font-medium text-gray-800 dark:text-white">
                            FAQ'S
                        </span>
                    </Link>
                    <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
                </li>


            </ul>
        </div>

    )
}

export default ServiceStep
