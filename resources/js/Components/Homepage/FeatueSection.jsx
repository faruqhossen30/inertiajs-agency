
import { features } from '@/data/features';
import { ChartBarIcon, HandThumbUpIcon, LinkIcon, ListBulletIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import React from 'react'

function FeatueSection() {
    const icons = [
        <ChartBarIcon className="w-12 text-gray-600" />,
        <UserGroupIcon className="w-12 text-gray-600" />,
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-person-square text-gray-600" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
        </svg>,
        <LinkIcon className="w-12 text-gray-600" />,
        <HandThumbUpIcon className="w-12 text-gray-600" />,
        <ListBulletIcon className="w-12 text-gray-600" />,
    ];
    return (

        <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto space-y-10">
            <h2 className="text-5xl font-bold text-center capitalize dark:text-gray-400">What we are different</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2  gap-6">

                {
                    features.map((feature, index) => {
                        return <div key={index} className="group md:flex  gap-y-6 size-full space-x-5 bg-gray-50 focus:outline-none focus:bg-gray-100 dark:bg-slate-800 rounded-lg p-3 dark:hover:bg-slate-900 dark:focus:bg-neutral-800 border-2 hover:scale-105  dark:border-gray-700 transition-all">
                            <span className="sm:flex md:flex-none justify-center">{icons[index]}</span>
                            <div>
                                <div className="space-y-2">
                                    <h3 className="block font-bold text-xl text-gray-800 dark:text-gray-400">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-neutral-400">{feature.description}</p>
                                </div>

                            </div>
                        </div>

                    })
                }



            </div>
        </div>
    )
}

export default FeatueSection
