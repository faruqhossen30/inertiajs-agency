import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function FaqPage({ auth, user,service, laravelVersion, phpVersion }) {



    return (
        <AppLayout>


            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-6">
                    <div className="py-10">

                        <svg class="w-32 h-auto ms-2" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.5696 30.2968V10.7968H37.4474V13.1789H37.6229C37.7952 12.7972 38.0445 12.4094 38.3707 12.0155C38.7031 11.6154 39.134 11.283 39.6634 11.0183C40.1989 10.7475 40.8636 10.6121 41.6577 10.6121C42.6918 10.6121 43.6458 10.8829 44.5199 11.4246C45.3939 11.9601 46.0926 12.7695 46.6158 13.8529C47.139 14.93 47.4006 16.2811 47.4006 17.9061C47.4006 19.488 47.1451 20.8237 46.6342 21.9132C46.1295 22.9966 45.4401 23.8183 44.5661 24.3784C43.6982 24.9324 42.7256 25.2094 41.6484 25.2094C40.8852 25.2094 40.2358 25.0832 39.7003 24.8308C39.1709 24.5785 38.737 24.2615 38.3984 23.8799C38.0599 23.4921 37.8014 23.1012 37.6229 22.7073H37.5028V30.2968H33.5696ZM37.4197 17.8877C37.4197 18.7309 37.5367 19.4665 37.7706 20.0943C38.0045 20.7222 38.343 21.2115 38.7862 21.5624C39.2294 21.9071 39.768 22.0794 40.402 22.0794C41.0421 22.0794 41.5838 21.904 42.027 21.5532C42.4702 21.1961 42.8056 20.7037 43.0334 20.0759C43.2673 19.4419 43.3842 18.7125 43.3842 17.8877C43.3842 17.069 43.2704 16.3488 43.0426 15.7272C42.8149 15.1055 42.4794 14.6192 42.0362 14.2683C41.593 13.9175 41.0483 13.7421 40.402 13.7421C39.7618 13.7421 39.2202 13.9113 38.777 14.2499C38.34 14.5884 38.0045 15.0685 37.7706 15.6902C37.5367 16.3119 37.4197 17.0444 37.4197 17.8877ZM49.2427 24.9786V10.7968H53.0559V13.2712H53.2037C53.4622 12.391 53.8961 11.7262 54.5055 11.2769C55.1149 10.8214 55.8166 10.5936 56.6106 10.5936C56.8076 10.5936 57.02 10.6059 57.2477 10.6306C57.4754 10.6552 57.6755 10.689 57.8478 10.7321V14.2222C57.6632 14.1668 57.4077 14.1175 57.0815 14.0745C56.7553 14.0314 56.4567 14.0098 56.1859 14.0098C55.6073 14.0098 55.0903 14.136 54.6348 14.3884C54.1854 14.6346 53.8284 14.9793 53.5638 15.4225C53.3052 15.8657 53.176 16.3765 53.176 16.9551V24.9786H49.2427ZM64.9043 25.2556C63.4455 25.2556 62.1898 24.9601 61.1373 24.3692C60.0909 23.7721 59.2845 22.9289 58.7182 21.8394C58.1519 20.7437 57.8688 19.448 57.8688 17.9523C57.8688 16.4935 58.1519 15.2132 58.7182 14.1114C59.2845 13.0096 60.0816 12.1509 61.1096 11.5354C62.1437 10.9199 63.3563 10.6121 64.7474 10.6121C65.683 10.6121 66.5539 10.7629 67.3603 11.0645C68.1728 11.36 68.8806 11.8062 69.4839 12.4033C70.0932 13.0004 70.5672 13.7513 70.9057 14.6561C71.2443 15.5548 71.4135 16.6074 71.4135 17.8138V18.8941H59.4384V16.4566H67.7111C67.7111 15.8903 67.588 15.3886 67.3418 14.9516C67.0956 14.5146 66.754 14.1729 66.317 13.9267C65.8861 13.6744 65.3844 13.5482 64.812 13.5482C64.2149 13.5482 63.6856 13.6867 63.2239 13.9637C62.7684 14.2345 62.4114 14.6007 62.1529 15.0624C61.8944 15.5179 61.762 16.0257 61.7559 16.5858V18.9033C61.7559 19.605 61.8851 20.2113 62.1437 20.7222C62.4083 21.2331 62.7807 21.627 63.2608 21.904C63.741 22.181 64.3103 22.3195 64.9689 22.3195C65.406 22.3195 65.8061 22.2579 66.1692 22.1348C66.5324 22.0117 66.8432 21.8271 67.1018 21.5808C67.3603 21.3346 67.5572 21.033 67.6927 20.676L71.3304 20.9161C71.1458 21.7901 70.7672 22.5534 70.1948 23.2058C69.6285 23.8522 68.896 24.3569 67.9974 24.7201C67.1048 25.0771 66.0738 25.2556 64.9043 25.2556ZM77.1335 6.06949V24.9786H73.2003V6.06949H77.1335ZM79.5043 24.9786V10.7968H83.4375V24.9786H79.5043ZM81.4801 8.96863C80.8954 8.96863 80.3937 8.77474 79.9752 8.38696C79.5628 7.99302 79.3566 7.52214 79.3566 6.97431C79.3566 6.43265 79.5628 5.96792 79.9752 5.58014C80.3937 5.1862 80.8954 4.98923 81.4801 4.98923C82.0649 4.98923 82.5635 5.1862 82.9759 5.58014C83.3944 5.96792 83.6037 6.43265 83.6037 6.97431C83.6037 7.52214 83.3944 7.99302 82.9759 8.38696C82.5635 8.77474 82.0649 8.96863 81.4801 8.96863ZM89.7415 16.7797V24.9786H85.8083V10.7968H89.5569V13.2989H89.723C90.037 12.4741 90.5632 11.8216 91.3019 11.3415C92.0405 10.8552 92.9361 10.6121 93.9887 10.6121C94.9735 10.6121 95.8322 10.8275 96.5647 11.2584C97.2971 11.6893 97.8665 12.3048 98.2728 13.105C98.679 13.899 98.8821 14.8469 98.8821 15.9487V24.9786H94.9489V16.6505C94.9551 15.7826 94.7335 15.1055 94.2841 14.6192C93.8348 14.1268 93.2162 13.8806 92.4283 13.8806C91.8989 13.8806 91.4311 13.9944 91.0249 14.2222C90.6248 14.4499 90.3109 14.7823 90.0831 15.2193C89.8615 15.6502 89.7477 16.1703 89.7415 16.7797ZM107.665 25.2556C106.206 25.2556 104.951 24.9601 103.898 24.3692C102.852 23.7721 102.045 22.9289 101.479 21.8394C100.913 20.7437 100.63 19.448 100.63 17.9523C100.63 16.4935 100.913 15.2132 101.479 14.1114C102.045 13.0096 102.842 12.1509 103.87 11.5354C104.905 10.9199 106.117 10.6121 107.508 10.6121C108.444 10.6121 109.315 10.7629 110.121 11.0645C110.934 11.36 111.641 11.8062 112.245 12.4033C112.854 13.0004 113.328 13.7513 113.667 14.6561C114.005 15.5548 114.174 16.6074 114.174 17.8138V18.8941H102.199V16.4566H110.472C110.472 15.8903 110.349 15.3886 110.103 14.9516C109.856 14.5146 109.515 14.1729 109.078 13.9267C108.647 13.6744 108.145 13.5482 107.573 13.5482C106.976 13.5482 106.446 13.6867 105.985 13.9637C105.529 14.2345 105.172 14.6007 104.914 15.0624C104.655 15.5179 104.523 16.0257 104.517 16.5858V18.9033C104.517 19.605 104.646 20.2113 104.905 20.7222C105.169 21.2331 105.542 21.627 106.022 21.904C106.502 22.181 107.071 22.3195 107.73 22.3195C108.167 22.3195 108.567 22.2579 108.93 22.1348C109.293 22.0117 109.604 21.8271 109.863 21.5808C110.121 21.3346 110.318 21.033 110.454 20.676L114.091 20.9161C113.907 21.7901 113.528 22.5534 112.956 23.2058C112.389 23.8522 111.657 24.3569 110.758 24.7201C109.866 25.0771 108.835 25.2556 107.665 25.2556Z" fill="currentColor" class="fill-blue-600"></path>
                            <path d="M1 28.9786V15.9786C1 9.35116 6.37258 3.97858 13 3.97858C19.6274 3.97858 25 9.35116 25 15.9786C25 22.606 19.6274 27.9786 13 27.9786H12" class="stroke-blue-600" stroke="currentColor" stroke-width="2"></path>
                            <path d="M5 28.9786V16.1386C5 11.6319 8.58172 7.97858 13 7.97858C17.4183 7.97858 21 11.6319 21 16.1386C21 20.6452 17.4183 24.2986 13 24.2986H12" class="stroke-blue-600" stroke="currentColor" stroke-width="2"></path>
                            <circle cx="13" cy="16" r="5" fill="currentColor" class="fill-blue-600"></circle>
                        </svg>
                    </div>
                    <p className='py-1.5 px-3 inline-flex items-center gap-x-1 text-sm rounded-full bg-blue-50 text-blue-800'> Team license</p>

                    <div class="mt-5 font-semibold text-4xl lg:text-5xl text-gray-800">
                        <span class="text-6xl font-bold text-gray-800 dark:text-neutral-200">${service.basic_price}</span>
                        <span class="font-normal text-lg uppercase text-gray-500">USD </span>
                    </div>

                    <p class="mt-4 py-6 font-medium text-xl lg:mt-8 text-gray-800 ">Get access to all 275+ components and 8 templates.
                        Use <br /> for unlimited projects!</p>

                    <div className="flex justify-between border-b py-6">
                        <div className="">
                            <p className='text-gray-800'>Plan: <strong>Team</strong></p>
                            <span>One-time payment</span>
                        </div>
                        <p>$459.00 <span className='text-sm text-gray-500'>USD</span></p>
                    </div>
                    <div className="flex justify-between border-b py-6">
                        <div className="">
                            <span className='text-gray-800'>Subtotal</span>
                        </div>
                        <p>$459.00 <span className='text-sm text-gray-500'>USD</span></p>
                    </div>
                    <div className="flex justify-between border-b py-6">
                        <div className="">
                            <span className='text-gray-800'>Taxes</span>
                        </div>
                        <span className='text-gray-500'> Calculated at the next step</span>
                    </div>
                    <div className="flex justify-between border-b py-6">
                        <div className="">
                            <span className='text-gray-800'>Total price </span>
                        </div>
                        <p>$459.00 <span className='text-sm text-gray-500'>USD</span></p>
                    </div>

                </div>


                <div className="col-span-6">
                    <div className=" my-10 border bg-white rounded-3xl">

                        <div className="flex">
                            <svg class="h-14 w-14 flex-none" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0EA5E9" stroke-width="1.5"><path d="M28 33.75c-4.388 0-8.36 2.385-10.627 5.636-1.006 1.443-.428 3.372 1.131 4.187C21.326 45.048 24.771 46 28 46c3.23 0 6.674-.952 9.496-2.427 1.559-.815 2.137-2.744 1.13-4.187C36.36 36.136 32.389 33.75 28 33.75Z" fill="#E0F2FE"></path><circle cx="28" cy="24" r="6.25" fill="#E0F2FE"></circle><path d="M44.002 38A19.912 19.912 0 0 0 48 26c0-11.046-8.954-20-20-20S8 14.954 8 26c0 4.502 1.488 8.657 3.998 12" stroke-linecap="round"></path></svg>

                            <div className="">
                                <p>Personal</p>
                                <span>For individuals working on their next big idea.</span>
                            </div>
                        </div>
                        <div className="relative flex flex-col bg-slate-50 px-5 py-8 sm:rounded-2xl mx-20 ">
                            <div className="flex items-center space-x-2">
                                <span className='text-3xl font-extrabold'>$299</span>
                                <div className="">
                                    <p>one-time payment</p>
                                    <p>plus local taxes</p>

                                </div>
                            </div>
                            <button className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-900 text-white hover:bg-slate-700 mt-6 w-full">Get all-access</button>
                            <div className="flex space-x-2">
                                <p>Lifetime access.</p>
                                <p>Unlimited projects.</p>
                                <p>Free updates.</p>
                            </div>
                        </div>
                        <div className=" space-y-6 py-6">

                            <div className="flex px-20 space-x-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="h-8 w-8 flex-none"><path fill="#fff" d="M0 0h32v32H0z"></path><path fill="#E0F2FE" d="M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"></path><path fill="#0EA5E9" d="M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"></path></svg>

                                <p>
                                    <strong> Over 500+ components</strong> — everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more.
                                </p>
                            </div>
                            <div className="flex px-20 space-x-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="h-8 w-8 flex-none"><path fill="#fff" d="M0 0h32v32H0z"></path><rect width="23" height="22" x="3" y="5" stroke="#0EA5E9" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect><rect width="10" height="18" x="19" y="9" fill="#E0F2FE" stroke="#0EA5E9" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect><circle cx="6" cy="8" r="1" fill="#0EA5E9"></circle><circle cx="9" cy="8" r="1" fill="#0EA5E9"></circle><path stroke="#0EA5E9" stroke-width="1.5" d="M3 11h16"></path></svg>

                                <p>
                                    <strong>  Every site template </strong>— beautifully designed, expertly crafted website templates built with modern technologies like React and Next.js.


                                </p>
                            </div>
                            <div className="flex px-20 space-x-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="h-8 w-8 flex-none"><path fill="#fff" d="M0 0h32v32H0z"></path><path fill="#E0F2FE" d="M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"></path><path stroke="#0EA5E9" stroke-linecap="round" stroke-width="1.5" d="M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"></path><circle cx="16" cy="16" r="14" stroke="#0EA5E9" stroke-width="1.5"></circle></svg>

                                <p>
                                   <strong> Lifetime access</strong> — get instant access to everything we have today, plus any new components and templates we add in the future.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </AppLayout>
    );
}
