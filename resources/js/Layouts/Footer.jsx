import { Menu } from '@headlessui/react'
import { HomeModernIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline'
import { BanknotesIcon, ClipboardIcon, HomeIcon, UserIcon, WalletIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function Footer({ auth }) {
    return (
        <>
            {/* Footer For Mobile */}
            <footer className='md:hidden grid grid-cols-5 border-t border-gray-200 dark:border-gray-600 text-sm text-white dark:text-gray-200 white bg-white dark:bg-gray-700 inset-x-0 bottom-0 fixed pt-2'>
                <Link to='/' className='col-span-1 flex flex-col items-center'>
                    <HomeModernIcon className="h-5 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400" />
                    <span>Home</span>
                </Link>
                <Link to='/profile' className='col-span-1 flex flex-col items-center'>
                    <WalletIcon className="h-5 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400" />
                    <span>Wallet</span>
                </Link>
                <Link to='/deposit' className='col-span-1 flex flex-col items-center'>
                    <BanknotesIcon className="h-5 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400" />
                    <span>Deposite</span>
                </Link>
                <Link to='/statement' className='col-span-1 flex flex-col items-center'>
                    <ClipboardIcon className="h-5 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400" />
                    <span>Statement</span>
                </Link>

                <div className="hs-dropdown relative inline-flex">

                    <button id="hs-dropdown-with-icons" type="button" className="hs-dropdown-toggle pl-2 inline-flex justify-center items-center  align-middle  transition-all col-span-1 flex-col">
                        <UserCircleIcon className="h-5 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400" />
                        <span>Account</span>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-with-icons">
                        <div className="py-2 first:pt-0 last:pb-0">
                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                <UserIcon className="h-5 text-gray-800 hover:dark:bg-gray-50  dark:text-gray-400" />
                                Login
                            </a>
                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                <UserIcon className="h-5 text-gray-800 hover:dark:bg-gray-50 dark:text-gray-400" />
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <section className="w-full border-t dark:border-t-gray-700">
                <footer className="hidden container lg:block py-5 px-4 sm:px-6 lg:px-8 mx-auto">

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
                        <div className="col-span-full hidden lg:col-span-1 lg:block">
                            <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Boost Care IT</a>
                            <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
                        </div>


                        <div>
                            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Product</h4>

                            <div className="mt-3 grid space-y-3 text-sm">
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Pricing</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Changelog</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Docs</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Download</a></p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Company</h4>

                            <div className="mt-3 grid space-y-3 text-sm">
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">About us</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Blog</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Careers</a> <span className="inline text-blue-600 dark:text-blue-500">— We're hiring</span></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Customers</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Newsroom</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Sitemap</a></p>
                            </div>
                        </div>


                        <div>
                            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Resources</h4>

                            <div className="mt-3 grid space-y-3 text-sm">
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Community</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Help & Support</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">eBook</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">What's New</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Status</a></p>
                            </div>
                        </div>


                        <div>
                            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Developers</h4>

                            <div className="mt-3 grid space-y-3 text-sm">
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Api</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Status</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">GitHub</a> <span className="inline text-blue-600 dark:text-blue-500">— New</span></p>
                            </div>

                            <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Industries</h4>

                            <div className="mt-3 grid space-y-3 text-sm">
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Financial Services</a></p>
                                <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Education</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>

        </>
    )
}
