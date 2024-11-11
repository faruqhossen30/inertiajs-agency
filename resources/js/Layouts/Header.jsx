import Switcher from '@/Components/Common/Switcher'
import { activeMenu } from '@/Utils/Utils'
import { PowerIcon, UserIcon } from '@heroicons/react/24/outline'
import { Link, usePage } from '@inertiajs/react'
import { useState } from 'react'
import React from 'react'

export default function Header() {
    const { auth } = usePage().props
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex flex-wrap sticky top-0 sm:justify-start sm:flex-nowrap z-10 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
            <nav className="container relative w-full mx-auto sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between">
                    <Link href={route('homepage')} className="flex-none text-2xl font-semibold dark:text-gray-400" aria-label="Brand">
                        <img src={window.location.origin + '/boostcareit.png'} className="h-8 rounded-lg" alt="" />
                        {/* Boost Care IT */}
                    </Link>
                    <div className="sm:hidden">
                        <div className="inline px-2"> <Switcher /></div>
                        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 font-Montserrat sm:mt-0 sm:pl-7">

                        <Link href={route('homepage')} className={`sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 ${activeMenu('homepage')}`} >Home</Link>
                        <Link href={route('contact')} className="font-medium text-gray-500 hover:text-blue-600 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 " >Contact</Link>
                        <Link href={route('servicepage')} className="font-medium text-gray-800 hover:text-blue-600 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Service</Link>
                        <Link href={route('blogpage')} className="font-medium text-gray-500 hover:text-blue-600 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Blog</Link>
                        <Link href={route('teampage')} className="font-medium text-gray-500 hover:text-blue-600 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Teams</Link>
                        <Link href={route('aboutpage')} className="font-medium text-gray-500 hover:text-blue-600 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >About Us</Link>

                        <div class="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
                            <button id="hs-dropdown-hover-event" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium  hover:text-blue-600 text-gray-800  focus:outline-none  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Who We Are
                                <svg class="hs-dropdown-open:rotate-180 h-5 w-4=5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                                <div class="p-1 space-y-0.5">
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                                        Newsletter
                                    </a>
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                                        Purchases
                                    </a>
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                                        Downloads
                                    </a>
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#">
                                        Team Account
                                    </a>
                                </div>
                            </div>
                        </div>

                        <Switcher />
                        {
                            auth.user ?
                                <>
                                    <Link href={route('dashboard')} className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" >
                                        <UserIcon className="w-4 h-4" />
                                        Dashboard
                                    </Link>
                                    <Link href={route('logout')} method="post" as="button" className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" >
                                        <PowerIcon className="w-4 h-4" />
                                        Logout
                                    </Link>
                                </>
                                :
                                <Link href={route('login')} className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" >
                                    <UserIcon className="w-4 h-4" />
                                    Log in
                                </Link>
                        }

                    </div>
                </div>
            </nav>
        </header>
    )
}
