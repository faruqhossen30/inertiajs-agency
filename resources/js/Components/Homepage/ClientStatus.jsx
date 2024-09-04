import { status } from '@/data/status'
import { BriefcaseIcon, GlobeAltIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

function ClientStatus() {

    // const icons = [
    //     <BriefcaseIcon className="w-12 bg-amber-500" />,
    //     <UserIcon className="w-12 bg-amber-500" />,
    //     <UserGroupIcon className="w-12 bg-amber-500" />,
    //     <GlobeAltIcon className="w-12 bg-amber-500" />
    // ];

    const icons = [
        <BriefcaseIcon className="w-16 text-white bg-amber-500 p-3 rounded-lg" />,
        <UserIcon className="w-16 text-white bg-amber-500 p-3 rounded-lg" />,
        <UserGroupIcon className="w-16 text-white bg-amber-500 p-3 rounded-lg" />,
        <GlobeAltIcon className="w-16 text-white bg-amber-500 p-3 rounded-lg" />
    ];

    return (
        <div className="py-32 space-y-10">
            <h2 className="text-5xl font-bold dark:text-gray-400 text-center">Our Memorable Journey</h2>
            <div className="container max-w-7xl grid grid-cols-12 gap-8   ">
                {
                    status.map((item, index) => {
                        return <div key={index} className="col-span-3 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 space-y-5 px-5 py-10 border-2 text-center rounded-lg  dark:border-gray-700 shadow text-gray-800 hover:translate-y-6 transition-all duration-700 ">
                            <span className="text-center flex justify-center">{icons[index]}</span>
                            <h3 className="text-4xl font-bold dark:text-gray-400">{item.title}+</h3>
                            <p className="text-2xl font-bold dark:text-gray-400">{item.text}</p>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default ClientStatus
