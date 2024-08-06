import AppLayout from '@/Layouts/AppLayout';
import { Link, Head } from '@inertiajs/react';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import FeatureStatus from '@/Components/Homepage/FeatureStatus';
import Feature from '@/Components/Homepage/Feature';
import Testimonial from '@/Components/Homepage/Testimonial';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function BlogPage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="Blogs" />
            <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">

                    <Link href={route('single.blog','abc')} className="group rounded-xl overflow-hidden">
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                            </div>

                            <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    Studio by Preline
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
                                </p>
                                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                    Read more
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </p>
                            </div>
                        </div>
                    </Link>



                    <Link href={route('single.blog','abc')} className="group rounded-xl overflow-hidden">
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="Image Description" />
                            </div>

                            <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    Onsite
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
                                </p>
                                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                    Read more
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </p>
                            </div>
                        </div>
                    </Link>



                    <Link href={route('single.blog','abc')} className="group rounded-xl overflow-hidden">
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description" />
                            </div>

                            <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    The complete guide to OKRs
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    How to make objectives and key results work for your company
                                </p>
                                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                    Read more
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </p>
                            </div>
                        </div>
                    </Link>



                    <Link href={route('single.blog','abc')} className="group rounded-xl overflow-hidden">
                        <div className="sm:flex">
                            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                            </div>

                            <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    People program models
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    Six approaches to bringing your People strategy to life
                                </p>
                                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                    Read more
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </p>
                            </div>
                        </div>
                    </Link>

                </div>

            </div>
        </AppLayout>
    );
}





