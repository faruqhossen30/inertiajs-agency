import AppLayout from '@/Layouts/AppLayout';
import { Head, router } from '@inertiajs/react';
import Service from '@/Components/Frontend/Service/Service';
import CategorySidebar from '@/Components/Frontend/CategorySidebar';
import Pagination from '@/Components/Pagination';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function ServicePage({ services }) {
    const params = route().params;
    const [day, setDay] = useState([]);

    const duration = [10, 20, 30, 40, 50];



    return (
        <AppLayout>
            <Head title="Services" />
            <div className="grid grid-cols-12 gap-5 mt-5">
                <div className="col-span-3 hidden md:block">
                    <CategorySidebar />
                </div>
                <div className="col-span-12 md:col-span-9 ">
                    <div className="p-1 px-5 flex items-center space-x-2 border dark:border-gray-700 rounded-md">
                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 dark:text-gray-400" />
                        <input type="text"
                            onChange={(e) => {
                                return router.get(route(route().current(), params),
                                    {
                                        search: e.target.value
                                    },
                                    {
                                        preserveState: true,
                                        replace: true
                                    }
                                )
                            }}
                            className="w-full bg-white dark:bg-transparent border-none focus:border-none focus:ring-0 text-gray-400 rounded-md" placeholder="Search your place" />
                    </div>
                    <div className=" bg-white dark:bg-slate-800 flex justify-end">
                        <div className="flex items-center  space-x-2">
                        </div>

                        <div className=" flex space-x-2 py-3 ">
                            <div className="flex items-center space-x-1">
                                <label htmlFor="name" className="text-gray-800 dark:text-gray-400">Order:</label>
                                <select name="show"
                                    onChange={(e) => {
                                        return router.get(route('servicepage', params),
                                            {
                                                show: e.target.value
                                            },
                                            {
                                                preserveState: true,
                                                replace: true
                                            }
                                        )
                                    }}
                                    className="py-1 px-4 pe-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                    <option value="9">9</option>
                                    <option value="12">12</option>
                                    <option value="15">15</option>
                                </select>
                            </div>

                            <div className="flex items-center space-x-1">
                                <label htmlFor="orderby" className="text-gray-800 dark:text-gray-400">Sort:</label>
                                <select name="orderby"
                                    onChange={(e) => {
                                        return router.get(route('servicepage', params),
                                            {
                                                orderby: e.target.value
                                            },
                                            {
                                                preserveState: true,
                                                replace: true
                                            }
                                        )
                                    }}
                                    className="py-1 px-4 pe-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                    <option value="">Price:</option>
                                    <option value="asc">Low to Hith</option>
                                    <option value="desc">High to low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                        {services.data.map((service, index) => {
                            return <Service service={service} key={index} />
                        })}
                    </div>

                    <div className="py-10">
                        <Pagination pagination={services} links={services.links} />
                    </div>
                </div>
            </div>

        </AppLayout>
    );
}
