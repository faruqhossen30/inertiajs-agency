import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function FaqPage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="FAQ" />

            {/* <div className="grid grid-cols-12 pb-24">
                <div className="col-span-2"></div>
                <div className="col-span-8 px-16 py-6">
                    <div className="py-3 flex justify-center ">
                        <span className='text-center text-3xl my-6 px-6 font-extrabold text-gray-950'>How Can We Help You?</span>
                    </div>
                    <form>
                        <div class="mt-4 flex flex-col items-center border rounded-lg gap-6 py-3 px-6 sm:flex-row sm:gap-3  p-2 dark:bg-neutral-900 bg-gray-100">
                            <div class="w-full">
                                <label for="hero-input" class="sr-only">Subscribe</label>
                                <input type="text" id="hero-input" name="hero-input" class="py-1 px-4  bg-gray-100 block w-full border-transparent text-sm focus:border-blue-500 focus:ring-blue-500  disabled:opacity-50 disabled:pointer-events-none placeholder:text-lg  " placeholder="Enter Address Website" />
                            </div>
                            <a class="w-full sm:w-auto whitespace-nowrap rounded px-6 py-4  text-white inline-flex justify-center items-center gap-x-2 text-sm  border border-transparent bg-blue-700  font-extrabold   text-blackfocus:outline-none focus:bg-gray-200 disabled:opacity-50 hover:bg-gray-200 hover:text-gray-600 hover:font-bold disabled:pointer-events-none" href="#">
                                Send Us a Proposal
                            </a>
                        </div>
                    </form>
                </div>
                <div className="col-span-2 "></div>
            </div> */}

            <section class="relative h-screen py-20 md:py-24 overflow-hidden w-full">
                <img class="absolute top-0 left-0" src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/newsletter/light-left-top-double.png" alt=""/>
                    <div class="relative container px-4 mx-auto">
                        <div class=" mx-auto">
                            <div class="flex flex-wrap -mx-4 items-center">
                                <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                                    <div class="relative z-10 max-w-lg mx-auto">
                                        <h4 class="font-heading text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-bold mb-6">Sign up for our newsletter</h4>
                                        <div class="md:flex mb-16">
                                            <div class="mb-6 md:mb-0 md:mr-8 pt-2 text-gray-600">
                                                <svg width="84" height="10" viewbox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 4.5C0.585786 4.5 0.25 4.83579 0.25 5.25C0.25 5.66421 0.585786 6 1 6L1 4.5ZM84 5.25001L76.5 0.919879L76.5 9.58013L84 5.25001ZM1 6L77.25 6.00001L77.25 4.50001L1 4.5L1 6Z" fill="#1E2238"></path>
                                                </svg>
                                            </div>
                                            <div class="max-w-xs">
                                                <p class="text-lg font-semibold text-gray-400">Stay in the loop with everything you need to know.</p>
                                            </div>
                                        </div>
                                        <div class="sm:flex items-center">
                                            <input class="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="email" placeholder="pat@saturn.dev"/>
                                                <button class="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-orange-900 rounded-md overflow-hidden" type="submit">
                                                    <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                                    <div class="relative flex items-center justify-center">
                                                        <span class="mr-4">Subscribe</span>
                                                        <svg width="8" height="11" viewbox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z" fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full lg:w-1/2 px-4">
                                    <div class="relative pl-20 lg:pl-16 xl:pl-0 max-w-lg mx-auto">
                                        <img class="absolute w-125 h-125 object-contain bottom-0 left-0 -mb-32 sm:-mb-0 -ml-8 xs:-ml-20 md:-ml-40 lg:-ml-24 xl:-ml-52" src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/newsletter/circle-star-bg.png" alt=""/>
                                            <img class="relative block w-full xl:max-w-sm lg:ml-auto" src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/newsletter/image-yellow-ghost.png" alt=""/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



















                    <div className="">
                        <div className="w-full px-6 pb-20 pt-12 mx-auto ">
                            < div className=" flex justify-center pb-6  ">
                                <span className='text-center text-3xl px-6 font-extrabold text-gray-950'>FAQ</span>
                            </div>
                            <div className="grid grid-cols-12 gap-6  pt-12">
                                <div className="col-span-6">

                                    <div class="hs-accordion-group pb-3">
                                        <div class="hs-accordion " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none  " aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                                <span className='hs-accordion-active:bg-green-500 border  px-3 py-1 rounded-md text-white bg-blue-500'>Q</span>
                                                <p className='pr-10 text-lg'>How do I find out the status of my order?</p>

                                                <svg class="hs-accordion-active:hidden block size-4.5 px-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>

                                                <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content hs-accordion-active:block  hidden w-full overflow-hidden transition-[height] duration-400" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                <p class="text-base text-gray-800 dark:text-neutral-200 border-t-0 rounded border px-4 py-2">
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hs-accordion-group pb-3">
                                        <div class="hs-accordion " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none  " aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                                <span className='hs-accordion-active:bg-green-500 border  px-3 py-1 rounded-md text-white bg-blue-500'>Q</span>
                                                <p className='pr-10 text-lg'>How do I find out the status of my order?</p>

                                                <svg class="hs-accordion-active:hidden block size-4.5 px-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>

                                                <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content hs-accordion-active:block  hidden w-full overflow-hidden transition-[height] duration-400" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                <p class="text-gray-800 dark:text-neutral-200 border-t-0 rounded border px-4 py-2">
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hs-accordion-group pb-3">
                                        <div class="hs-accordion " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none  " aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                                <span className='hs-accordion-active:bg-green-500 border  px-3 py-1 rounded-md text-white bg-blue-500'>Q</span>
                                                <p className='pr-10 text-lg'>How do I find out the status of my order?</p>

                                                <svg class="hs-accordion-active:hidden block size-4.5 px-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>

                                                <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content hs-accordion-active:block  hidden w-full overflow-hidden transition-[height] duration-400" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                <p class="text-gray-800 dark:text-neutral-200 border-t-0 rounded border px-4 py-2">
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hs-accordion-group pb-3">
                                        <div class="hs-accordion " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none  " aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                                <span className='hs-accordion-active:bg-green-500 border  px-3 py-1 rounded-md text-white bg-blue-500'>Q</span>
                                                <p className='pr-10 text-lg'>How do I find out the status of my order?</p>

                                                <svg class="hs-accordion-active:hidden block size-4.5 px-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>

                                                <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content hs-accordion-active:block  hidden w-full overflow-hidden transition-[height] duration-400" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                <p class="text-gray-800 dark:text-neutral-200 border-t-0 rounded border px-4 py-2">
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hs-accordion-group pb-3">
                                        <div class="hs-accordion " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none  " aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                                <span className='hs-accordion-active:bg-green-500 border  px-3 py-1 rounded-md text-white bg-blue-500'>Q</span>
                                                <p className='pr-10 text-lg'>How do I find out the status of my order?</p>

                                                <svg class="hs-accordion-active:hidden block size-4.5 px-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>

                                                <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content hs-accordion-active:block  hidden w-full overflow-hidden transition-[height] duration-400" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                <p class="text-gray-800 dark:text-neutral-200 border-t-0 rounded border px-4 py-2">
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div class="hs-accordion-group pb-3">
                                        <div class="hs-accordion " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none  " aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                                <span className='hs-accordion-active:bg-green-500 border  px-3 py-1 rounded-md text-white bg-blue-500'>Q</span>
                                                <p className='pr-10 text-lg'>How do I find out the status of my order?</p>

                                                <svg class="hs-accordion-active:hidden block size-4.5 px-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>

                                                <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content hs-accordion-active:block  hidden w-full overflow-hidden transition-[height] duration-400" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                <p class="text-gray-800 dark:text-neutral-200 border-t-0 rounded border px-4 py-2">
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hs-accordion-group pb-3">
                                        <div class="hs-accordion " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none  " aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                                <span className='hs-accordion-active:bg-green-500 border  px-3 py-1 rounded-md text-white bg-blue-500'>Q</span>
                                                <p className='pr-10 text-lg'>How do I find out the status of my order?</p>

                                                <svg class="hs-accordion-active:hidden block size-4.5 px-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>

                                                <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content hs-accordion-active:block  hidden w-full overflow-hidden transition-[height] duration-400" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                <p class="text-gray-800 dark:text-neutral-200 border-t-0 rounded border px-4 py-2">
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hs-accordion-group pb-3">
                                        <div class="hs-accordion " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none  " aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                                <span className='hs-accordion-active:bg-green-500 border  px-3 py-1 rounded-md text-white bg-blue-500'>Q</span>
                                                <p className='pr-10 text-lg'>How do I find out the status of my order?</p>

                                                <svg class="hs-accordion-active:hidden block size-4.5 px-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>

                                                <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content hs-accordion-active:block  hidden w-full overflow-hidden transition-[height] duration-400" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                <p class="text-gray-800 dark:text-neutral-200 border-t-0 rounded border px-4 py-2">
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hs-accordion-group pb-3">
                                        <div class="hs-accordion " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none  " aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                                <span className='hs-accordion-active:bg-green-500 border  px-3 py-1 rounded-md text-white bg-blue-500'>Q</span>
                                                <p className='pr-10 text-lg'>How do I find out the status of my order?</p>

                                                <svg class="hs-accordion-active:hidden block size-4.5 px-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>

                                                <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content hs-accordion-active:block  hidden w-full overflow-hidden transition-[height] duration-400" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                <p class="text-gray-800 dark:text-neutral-200 border-t-0 rounded border px-4 py-2">
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="hs-accordion-group pb-3">
                                        <div class="hs-accordion " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none  " aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                                <span className='hs-accordion-active:bg-green-500 border  px-3 py-1 rounded-md text-white bg-blue-500'>Q</span>
                                                <p className='pr-10 text-lg'>How do I find out the status of my order?</p>

                                                <svg class="hs-accordion-active:hidden block size-4.5 px-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>

                                                <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content hs-accordion-active:block  hidden w-full overflow-hidden transition-[height] duration-400" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                <p class="text-gray-800 dark:text-neutral-200 border-t-0 rounded border px-4 py-2">
                                                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </AppLayout>
                );
}
