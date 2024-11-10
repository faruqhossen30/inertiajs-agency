import { CodeBracketIcon, HomeIcon, PencilIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react';
import axios from 'axios';

import React, { useEffect, useState } from 'react'

function CategorySidebar() {
    const params = route().params;
    console.log(params.category);

    const [Categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(route('data.categories'))
            .then((res) => {
                setCategories(res.data);
            });

    }, []);
    return (
        <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 mb-4 rounded-md border dark:border-gray-700">
            <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 dark:text-gray-400">
                <span className="text-lg font-bold">All Category </span>
            </li>
            {Categories.map((category, index) => {
                return <li key={index} className={`inline-flex items-center gap-x-2 text-sm font-medium text-gray-800 font-Montserrat dark:text-gray-400 hover:dark:bg-slate-900 hover:bg-gray-100 ${params.category == category.id ? 'bg-gray-100 dark:bg-slate-900' : 'none'}`}>
                    <Link href={route(route().current(),params)} data={{ category: category.id }} method="get" className="inline-flex space-x-2 py-3 px-4  w-full">
                        {/* <HomeIcon className="w-4 h-4" /> */}
                        <img src={window.location.origin + '/storage/' + category.icon} alt="photo" className="h-4" />
                        <span className="uppercase">{category.name}</span>
                    </Link>
                </li>
            })}
        </ul>
    )
}

export default CategorySidebar
