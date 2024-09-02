import { Menu } from '@headlessui/react'
import { HomeModernIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline'
import { BanknotesIcon, ClipboardIcon, HomeIcon, UserIcon, WalletIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function Footer({ auth }) {
    return (
        <>
            {/* Footer For Mobile */}
            <footer className='md:hidden grid grid-cols-5 border-t border-gray-200 dark:border-gray-600 text-sm text-black dark:text-gray-200 white bg-white dark:bg-gray-700 inset-x-0 bottom-0 fixed pt-2'>
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

            <section className="w-full border-t dark:border-t-gray-700 bg-gray-100">
                <footer className="hidden container lg:block  px-4 sm:px-6 lg:px-8 mx-auto">

                    <div className="grid grid-cols-12 py-12">
                        <div className="col-span-4">
                            <div className=" space-y-6">
                                <div className=" flex items-center space-x-3 text-sm">
                                    <img className='h-10' src={window.location.origin + '/boostcareit.png'} alt="" srcSet="" />

                                </div>

                                <p className='text-sm text-gray-800 leading-7  font-light   '>Boost Care It is here to offer services  just for you!  <br />Our team of skilled professionals is ready  to give <br /> you the best creative design, digital marketing <br /> development,  and more.</p>
                                <div className="flex space-x-2">
                                    <svg className="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                    </svg>

                                    <svg className="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd" />
                                        <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                                    </svg>
                                    <svg className="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                                    </svg>
                                    <svg className="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-3 pl-10">
                            <h6 className='text-black  font-bold pb-5'>Resources</h6>
                            <p><a href="#" className='text-black text-sm'>About Us</a></p>
                            <p><a href="#" className='text-black text-sm'>Contact Us
                            </a></p>
                            <p><a href="#" className='text-black text-sm'>Our Team
                            </a></p>

                            <p><a href="#" className='text-black text-sm'>Privacy Policy
                            </a></p>
                            <p><a href="#" className='text-black text-sm'>Sitemap
                            </a></p>
                            <p><a href="#" className='text-black text-sm'>FAQs

                            </a></p>
                            <p><a href="#" className='text-black text-sm'>Disclaimer

                            </a></p>

                            <p><a href="#" className='text-black text-sm'>Terms and Conditions
                            </a></p>
                        </div>
                        <div className="col-span-2">
                            <h6 className='text-black  font-bold pb-5'>Services</h6>
                            <p><a href="#" className='text-black  text-sm'>Creative & Design
                            </a></p>
                            <p><a href="#" className='text-black  text-sm'>Development</a></p>
                            <p><a href="#" className='text-black  text-sm'>SEO</a></p>
                            <p><a href="#" className='text-black  text-sm'>Content Writing
                            </a></p>
                            <p><a href="#" className='text-black  text-sm'>Video & Animation
                            </a></p>
                            <p><a href="#" className='text-black  text-sm'>e-Commerce
                            </a></p>
                            <p><a href="#" className='text-black  text-sm'>Digital Marketing
                            </a></p>
                            <p><a href="#" className='text-black  text-sm'>Business Consultants
                            </a></p>

                        </div>
                        <div className="col-span-3">
                            <div className="space-y-3 ">
                            <h6 className='text-black  font-bold '>Subscribe</h6>
                                <form>
                                    <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white p-2 dark:bg-neutral-900">
                                        <div className="w-full">
                                            <label labelfor="hero-input" className="sr-only">Subscribe</label>
                                            <input type="text" id="hero-input" name="hero-input" className="py-1 px-4 block w-full border-transparent text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  " placeholder="Enter Address"/>
                                        </div>
                                        <a className="w-full sm:w-auto whitespace-nowrap rounded px-6 p-2 inline-flex justify-center items-center gap-x-2 text-sm  border border-transparent bg-gray-200  font-extrabold  hover:text-white text-blackfocus:outline-none focus:bg-blue-700 disabled:opacity-50 hover:bg-blue-500 disabled:pointer-events-none" href="#">
                                            Send
                                        </a>
                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>

                </footer>
                <div className=" my-1 bg-gray-300">
                    <div className="py-3 flex justify-center">
                        <p className='text-center text-base font-bold text-gray-800'> Boost   Care It 2024 | All right reserved.</p>
                    </div>

                </div>
            </section>

        </>
    )
}
