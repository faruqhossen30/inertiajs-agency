import AppLayout from '@/Layouts/AppLayout';
import { Link, Head } from '@inertiajs/react';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import FeatureStatus from '@/Components/Homepage/FeatureStatus';
import Feature from '@/Components/Homepage/Feature';
import Testimonial from '@/Components/Homepage/Testimonial';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Pagination from '@/Components/Pagination';

export default function BlogPage({ blogs }) {
    console.log(blogs.data);


    return (
        <AppLayout>
            <Head title="Blogs" />
            <div className="container py-15 sm:px-6 mx-auto">

                <div className=" bg-white dark:bg-slate-800 flex justify-between">
                    <div className="flex items-center  space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="w-6 h-6 text-gray-800 dark:text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        <svg className="w-4 h-4 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            className="w-4 h-4 text-gray-800 dark:text-gray-400 bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                            <path
                                d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
                        </svg>

                    </div>

                    <div className=" flex space-x-2 py-3 ">
                        <div className="flex items-center space-x-1">
                            <label htmlFor="show" className="text-gray-800 dark:text-gray-400">Order:</label>
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
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
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
                <hr />
                <div className="grid py-5 lg:grid-cols-2 lg:gap-y-16 gap-10">

                    {
                        blogs.data.map((blog, index) => {
                            return <Link key={index} href={route('single.blog', 'abc')} className="group rounded-xl overflow-hidden">
                                <div className="sm:flex">
                                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                                    </div>

                                    <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                                            {blog.title}
                                        </h3>
                                        <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                            Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
                                        </p>
                                        <Link className="mt-4 inline-flex items-center gap-x-1 group-hover:text-blue-600 font-bold decoration-2 hover:underline ">
                                            Read more
                                            <ArrowRightIcon className="w-4 hidden group-hover:block group-hover:transition-all duration-700" />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        })
                    }


                </div>
                <hr />
                <div className="py-5 px-3">
                    <Pagination pagination={blogs} links={blogs.links} />
                </div>

            </div>
        </AppLayout>
    );
}





