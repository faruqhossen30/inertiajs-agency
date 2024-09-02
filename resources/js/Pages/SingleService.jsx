import AppLayout from '@/Layouts/AppLayout';
import { Link, Head } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import Slider from '@/Components/Slider';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import FeatureStatus from '@/Components/Homepage/FeatureStatus';

export default function SingleService({ service }) {

    return (
        <AppLayout>
            <Head title="Service" />


            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Pricing</h2>
                    <p class="mt-1 text-gray-600 dark:text-neutral-400">Whatever your status, our offers evolve according to your needs.</p>
                </div>



                <div class="flex justify-center items-center">
                    <label class="min-w-14 text-sm text-gray-500 me-3 dark:text-neutral-400">Monthly</label>

                    <input type="checkbox" id="hs-basic-with-description" class="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600

    before:inline-block before:size-6 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white" checked />

                    <label class="relative min-w-14 text-sm text-gray-500 ms-3 dark:text-neutral-400">
                        Annual
                        <span class="absolute -top-10 start-auto -end-28">
                            <span class="flex items-center">
                                <svg class="w-14 h-8 -me-6" width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z" fill="currentColor" class="fill-gray-300 dark:fill-neutral-700" />
                                </svg>
                                <span class="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5">Save up to 10%</span>
                            </span>
                        </span>
                    </label>
                </div>



                <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">




                    <div class="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
                        <p class="mb-3"><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">Most popular</span></p>
                        <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">Startup</h4>
                        <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                            <span class="font-bold text-2xl -me-2">$</span>
                            39
                        </span>
                        <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">All the basics for starting a new business</p>

                        <ul class="mt-7 space-y-2.5 text-sm">
                            <li class="flex gap-x-2">
                                <svg class="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span class="text-gray-800 dark:text-neutral-400">
                                    2 users
                                </span>
                            </li>

                            <li class="flex gap-x-2">
                                <svg class="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span class="text-gray-800 dark:text-neutral-400">
                                    Plan features
                                </span>
                            </li>

                            <li class="flex gap-x-2">
                                <svg class="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span class="text-gray-800 dark:text-neutral-400">
                                    Product support
                                </span>
                            </li>
                        </ul>

                        <a class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                            Sign up
                        </a>
                    </div>



                    <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
                        <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">Team</h4>
                        <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                            <span class="font-bold text-2xl -me-2">$</span>
                            89
                        </span>
                        <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">Everything you need for a growing business</p>

                        <ul class="mt-7 space-y-2.5 text-sm">
                            <li class="flex gap-x-2">
                                <svg class="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span class="text-gray-800 dark:text-neutral-400">
                                    5 users
                                </span>
                            </li>

                            <li class="flex gap-x-2">
                                <svg class="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span class="text-gray-800 dark:text-neutral-400">
                                    Plan features
                                </span>
                            </li>

                            <li class="flex gap-x-2">
                                <svg class="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span class="text-gray-800 dark:text-neutral-400">
                                    Product support
                                </span>
                            </li>
                        </ul>

                        <a class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                            Sign up
                        </a>
                    </div>



                    <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
                        <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">Enterprise</h4>
                        <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                            <span class="font-bold text-2xl -me-2">$</span>
                            149
                        </span>
                        <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">Advanced features for scaling your business</p>

                        <ul class="mt-7 space-y-2.5 text-sm">
                            <li class="flex gap-x-2">
                                <svg class="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span class="text-gray-800 dark:text-neutral-400">
                                    10 users
                                </span>
                            </li>

                            <li class="flex gap-x-2">
                                <svg class="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span class="text-gray-800 dark:text-neutral-400">
                                    Plan features
                                </span>
                            </li>

                            <li class="flex gap-x-2">
                                <svg class="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span class="text-gray-800 dark:text-neutral-400">
                                    Product support
                                </span>
                            </li>
                        </ul>

                        <a class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                            Sign up
                        </a>
                    </div>

                </div>



                <div class="mt-20 lg:mt-32">
                    <div class="lg:text-center mb-10 lg:mb-20">
                        <h3 class="text-2xl font-semibold dark:text-white">Compare plans</h3>
                    </div>


                    <div class="space-y-24 lg:hidden">
                        <section>
                            <div class="px-4 mb-4">
                                <h2 class="text-lg leading-6 font-medium text-gray-800">Free</h2>
                            </div>
                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Financial data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Open/High/Low/Close</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Price-volume difference indicator</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    On-chain data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Network growth</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Average token age consumed</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Exchange flow</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total ERC20 exchange funds flow</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Transaction volume</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total circulation (beta)</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Velocity of tokens (beta)</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">ETH gas used</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Social data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Dev activity</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Topic search</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Relative social dominance</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total social volume</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <div class="px-4 mb-4">
                                <h2 class="text-lg leading-6 font-medium text-gray-800">Startup</h2>
                            </div>
                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Financial data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Open/High/Low/Close</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Price-volume difference indicator</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    On-chain data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Network growth</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Average token age consumed</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Exchange flow</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total ERC20 exchange funds flow</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Transaction volume</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total circulation (beta)</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Velocity of tokens (beta)</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">ETH gas used</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Social data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Dev activity</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Topic search</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Relative social dominance</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total social volume</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <div class="px-4 mb-4">
                                <h2 class="text-lg leading-6 font-medium text-gray-800">Team</h2>
                            </div>
                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Financial data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Open/High/Low/Close</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Price-volume difference indicator</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    On-chain data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Network growth</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Average token age consumed</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Exchange flow</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total ERC20 exchange funds flow</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Transaction volume</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total circulation (beta)</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Velocity of tokens (beta)</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">ETH gas used</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Social data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Dev activity</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Topic search</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Relative social dominance</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total social volume</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>

                                            <span class="sr-only">No</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <div class="px-4 mb-4">
                                <h2 class="text-lg leading-6 font-medium text-gray-800">Enterprise</h2>
                            </div>
                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Financial data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Open/High/Low/Close</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Price-volume difference indicator</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    On-chain data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Network growth</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Average token age consumed</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Exchange flow</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total ERC20 exchange funds flow</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Transaction volume</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total circulation (beta)</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Velocity of tokens (beta)</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">ETH gas used</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="w-full">
                                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-neutral-700 dark:border-neutral-700 dark:text-white">
                                    Social data
                                </caption>
                                <thead>
                                    <tr>
                                        <th class="sr-only" scope="col">Feature</th>
                                        <th class="sr-only" scope="col">Included</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Dev activity</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Topic search</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Relative social dominance</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>

                                    <tr class="border-t border-gray-200 dark:border-neutral-700">
                                        <th class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Total social volume</th>
                                        <td class="py-5 pe-4">

                                            <svg class="shrink-0 ms-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                            <span class="sr-only">Yes</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>



                    <div class="hidden lg:block">
                        <table class="w-full h-px">
                            <caption class="sr-only">
                                Pricing plan comparison
                            </caption>
                            <thead class="sticky top-0 inset-x-0 bg-white dark:bg-neutral-900">
                                <tr>
                                    <th class="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start" scope="col">
                                        <span class="sr-only">Feature by</span>
                                        <span class="dark:text-white">Plans</span>
                                    </th>
                                    <th class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Startup</th>
                                    <th class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Team</th>
                                    <th class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody class="border-t border-gray-200 divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                                <tr>
                                    <th class="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-neutral-800 dark:text-white" colspan="5" scope="colgroup">Financial data</th>
                                </tr>

                                <tr>
                                    <th class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-neutral-400" scope="row">Open/High/Low/Close</th>

                                    <td class="py-5 px-6">

                                        <svg class="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                        <span class="sr-only">Included in Free</span>
                                    </td>

                                    <td class="py-5 px-6">

                                        <svg class="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                        <span class="sr-only">Included in Startup</span>
                                    </td>

                                    <td class="py-5 px-6">

                                        <svg class="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                        <span class="sr-only">Included in Team</span>
                                    </td>

                                    <td class="py-5 px-6">

                                        <svg class="mx-auto shrink-0 size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>

                                        <span class="sr-only">Included in Enterprise</span>
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
