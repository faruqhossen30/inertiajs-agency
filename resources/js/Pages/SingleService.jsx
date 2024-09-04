import AppLayout from '@/Layouts/AppLayout';
import { Link, Head } from '@inertiajs/react';
import { CheckIcon, MinusIcon } from '@heroicons/react/24/outline';

export default function SingleService({ service }) {

    return (
        <AppLayout>

            <Head title="Service" />
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl  mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800 dark:text-gray-400 pb-3">{service.title}</h2>
                    <div className="prose dark:text-gray-400" dangerouslySetInnerHTML={{__html:service.description}}></div>
                </div>
                <hr className='py-10 dark:border-gray-700' />
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800 dark:text-gray-400">Pricing</h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400 ">Whatever your status, our offers evolve according to
                        your needs.</p>
                </div>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
                    <div
                        className="flex flex-col border hover:border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-gray-700">
                        <h4 className="font-medium text-lg text-gray-800 dark:text-gray-400">Basic</h4>
                        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-400">
                            <span className="font-bold text-2xl dark:text-gray-400 pr-1">$</span>
                            {service.basic_price}
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">All the basics for starting a new
                            business</p>
                        <ul className="mt-7 space-y-2.5 text-sm">
                            {service.items.slice(0, 5).map((feature, index) => {
                                return <li className="flex gap-x-2" key={index}>
                                    {feature.basic == '1' ?
                                        <CheckIcon className="w-5 text-green-500" /> :
                                        <MinusIcon className='w-5' />}

                                    <span className="text-gray-800 dark:text-neutral-400 text-start">
                                        {feature.feature.title}
                                    </span>
                                </li>
                            })
                            }
                        </ul>
                        <Link href={route('order', {id:service.id,package:'basic'})} className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-gray-700  hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 dark:text-gray-400"
                        >
                            Order Now
                        </Link>
                        <a href="#comparebasic" className="text-blue-500 block mt-3  text-sm underline ">
                            Compare Now
                        </a>
                    </div>
                    <div
                        className="flex flex-col border hover:border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-gray-700">
                        <p className="mb-3"><span
                            className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-gray-100">Most
                            popular</span></p>
                        <h4 className="font-medium text-lg text-gray-800 dark:text-gray-400">Standard</h4>
                        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-400">
                            <span className="font-bold text-2xl pr-1">$</span>
                            {service.standard_price}
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Everything you need for a growing
                            business</p>

                        <ul className="mt-7 space-y-2.5 text-sm">
                            {service.items.slice(0, 5).map((feature, index) => {
                                return <li className="flex gap-x-2" key={index}>
                                    {feature.standard == '1' ?
                                        <CheckIcon className="w-5 text-green-500" /> :
                                        <MinusIcon className='w-5' />}

                                    <span className="text-gray-800 dark:text-gray-400 text-start">
                                        {feature.feature.title}
                                    </span>
                                </li>
                            })
                            }

                        </ul>

                        <Link href={route('order', {id:service.id,package:'standard'})} className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-gray-700  hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 dark:text-gray-400"
                        >
                            Order Now
                        </Link>

                        <a href="#comparebasic" className="text-blue-500 block mt-3  text-sm underline ">
                            Compare Now
                        </a>
                    </div>



                    <div
                        className="flex flex-col border hover:border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-gray-700">
                        <h4 className="font-medium text-lg text-gray-800 dark:text-gray-400">Premium</h4>
                        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-400">
                            <span className="font-bold text-2xl dark:text-gray-400  pr-1">$</span>
                            {service.premium_price}
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Advanced features for scaling your
                            business</p>

                        <ul className="mt-7 space-y-2.5 text-sm">
                            {service.items.slice(0, 5).map((feature, index) => {
                                return <li className="flex gap-x-2" key={index}>
                                    {feature.premium == '1' ?
                                        <CheckIcon className="w-5 text-green-500" /> :
                                        <MinusIcon className='w-5' />}

                                    <span className="text-gray-800 dark:text-gray-400 text-start">
                                        {feature.feature.title}
                                    </span>
                                </li>
                            })
                            }
                        </ul>

                        <Link href={route('order', {id:service.id,package:'premium'})} className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-gray-700 dark:text-gray-400 hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50"
                        >
                            Order Now
                        </Link>

                        <a href="#comparebasic" className="text-blue-500 block mt-3  text-sm underline ">
                            Compare Now
                        </a>
                    </div>

                </div>



                <div className=" pt-20 lg:pt-20" id="comparebasic">
                    <div className="lg:text-center mb-10 lg:mb-20">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-400">Compare plans</h3>
                    </div>


                    <div className="space-y-24 lg:hidden">
                        <section>
                            <div className="px-4 mb-4">
                                <h2 className="text-lg leading-6 font-medium dark:text-gray-400">Free</h2>
                            </div>
                            <table className="w-full hover:bg-gray-100">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200  py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Financial data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Open/High/Low/Close</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Price-volume difference indicator</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    On-chain data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Network growth</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Average token age consumed</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Exchange flow</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total ERC20 exchange funds flow</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Transaction volume</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total circulation (beta)</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Velocity of tokens (beta)</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">ETH gas used</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Social data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Dev activity</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Topic search</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Relative social dominance</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total social volume</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
{/*
                        <section>
                            <div className="px-4 mb-4">
                                <h2 className="text-lg leading-6 font-medium text-gray-800">Startup</h2>
                            </div>
                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Financial data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Open/High/Low/Close</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Price-volume difference indicator</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    On-chain data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Network growth</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Average token age consumed</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Exchange flow</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total ERC20 exchange funds flow</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Transaction volume</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total circulation (beta)</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Velocity of tokens (beta)</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">ETH gas used</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Social data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Dev activity</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Topic search</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Relative social dominance</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total social volume</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <div className="px-4 mb-4">
                                <h2 className="text-lg leading-6 font-medium text-gray-800">Team</h2>
                            </div>
                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Financial data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Open/High/Low/Close</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Price-volume difference indicator</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    On-chain data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Network growth</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Average token age consumed</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Exchange flow</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total ERC20 exchange funds flow</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Transaction volume</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total circulation (beta)</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Velocity of tokens (beta)</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">ETH gas used</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Social data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Dev activity</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Topic search</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Relative social dominance</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total social volume</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                            </svg>

                                            <span className="sr-only">No</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <div className="px-4 mb-4">
                                <h2 className="text-lg leading-6 font-medium text-gray-800">Enterprise</h2>
                            </div>
                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Financial data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Open/High/Low/Close</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Price-volume difference indicator</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    On-chain data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Network growth</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Average token age consumed</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Exchange flow</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total ERC20 exchange funds flow</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Transaction volume</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total circulation (beta)</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Velocity of tokens (beta)</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">ETH gas used</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full">
                                <caption
                                    className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Social data
                                </caption>
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">Feature</th>
                                        <th className="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Dev activity</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Topic search</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Relative social dominance</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr className="border-t border-gray-200 dark:border-neutral-700">
                                        <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400"
                                            scope="row">Total social volume</th>
                                        <td className="py-5 pe-4">

                                            <svg className="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>

                                            <span className="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section> */}
                    </div>



                    <div className="hidden lg:block">
                        <table className="w-full h-px">
                            <caption className="sr-only">
                                Pricing plan comparison
                            </caption>
                            <thead className="sticky top-0 inset-x-0 bg-white dark:bg-slate-800 dark:border dark:rounded-lg border-gray-700 ">
                                <tr>
                                    <th className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start"
                                        scope="col">
                                        <span className="sr-only">Feature by</span>
                                        <span className="dark:text-gray-400 ">Plans</span>
                                    </th>
                                    <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-gray-400"
                                        scope="col">Startup</th>
                                    <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-gray-400"
                                        scope="col">Team</th>
                                    <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-gray-400"
                                        scope="col">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody
                                className="border-t border-gray-200 divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                                {/* <tr>
                                    <th className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:border border-gray-700  dark:bg-slate-800 dark:text-gray-400"
                                        colSpan="5" scope="colgroup">Financial data</th>
                                </tr> */}
                                {service.items.map((feature, index) => {
                                    return <tr className='dark:hover:bg-slate-900 hover:bg-gray-200'>
                                        <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600  text-start whitespace-nowrap  dark:text-gray-400"
                                            scope="row">{feature.feature.title}</th>

                                        <td className="py-5 px-6">

                                            {feature.basic == '1' ?
                                                <CheckIcon className="mx-auto w-5 text-green-500" /> :
                                                <MinusIcon className="mx-auto w-5" />}

                                            <span className="sr-only">Included in Free</span>
                                        </td>

                                        <td className="py-5 px-6">

                                            {feature.standard == '1' ?
                                                <CheckIcon className="mx-auto w-5 text-green-500" /> :
                                                <MinusIcon className="mx-auto w-5" />}

                                            <span className="sr-only">Included in Startup</span>
                                        </td>



                                        <td className="py-5 px-6">

                                            {feature.premium == '1' ?
                                                <CheckIcon className="mx-auto w-5 text-green-500" /> :
                                                <MinusIcon className="mx-auto w-5" />}
                                            <span className="sr-only">Included in Enterprise</span>
                                        </td>
                                    </tr>
                                })
                                }
                                <tr className="text-center">
                                    <td></td>
                                    <td>
                                        <Link href={route('order',{id:service.id,package:'basic'})} className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-neutral-700 dark:text-gray-400 hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50">
                                            Order Now
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href={route('order', {id:service.id,package:'standard'})} className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-neutral-700 dark:text-gray-400 hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50">
                                            Order Now
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href={route('order', {id:service.id,package:'premium'})} className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-neutral-700  hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 dark:text-gray-400">
                                            Order Now
                                        </Link>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </AppLayout>
    );
}
