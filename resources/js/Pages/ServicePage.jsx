import AppLayout from '@/Layouts/AppLayout';
import { Head, router } from '@inertiajs/react';
import Service from '@/Components/Frontend/Service/Service';
import CategorySidebar from '@/Components/Frontend/CategorySidebar';

export default function ServicePage() {
    const params = route().params;
    return (
        <AppLayout>
            <Head title="Services" />
            <div className="bg-white dark:bg-gray-800 p-4 my-3 border border-gray-200 dark:border-gray-700 rounded-md">
                <span className="text-gray-600 dark:text-gray-400 text-lg font-bold">Services</span>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3 hidden md:block py-1">
                    <CategorySidebar />
                    <div className="bg-white dark:bg-gray-800 mb-4 rounded-md px-4 py-2 space-y-2 border dark:border-gray-700">
                        <div className="inline-flex items-center gap-x-2 py-1 text-sm font-medium text-gray-800 dark:text-gray-400 border-b dark:border-b-gray-700 w-full">
                            <span className="text-lg font-bold">Delivery Days</span>
                        </div>

                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                            <label for="hs-default-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 10 days</label>
                        </div>

                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                            <label for="hs-checked-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 20 days</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                            <label for="hs-checked-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 20 days</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                            <label for="hs-checked-checkbox" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Up to 20 days</label>
                        </div>
                    </div>

                </div>
                <div className="col-span-12 md:col-span-9 ">
                    <div class=" bg-white dark:bg-slate-800 flex justify-between">
                        <div class="flex items-center  space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-6 h-6 text-gray-800 dark:text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                            <svg class="w-4 h-4 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="w-4 h-4 text-gray-800 dark:text-gray-400 bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                                <path
                                    d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
                            </svg>

                        </div>

                        <div class=" flex space-x-2 py-3 ">
                            <div class="flex items-center space-x-1">
                                <label for="" className="text-gray-800 dark:text-gray-400">Order:</label>
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
                            <div class="flex items-center space-x-1">
                                <label for="" className="text-gray-800 dark:text-gray-400">Sort:</label>
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
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                        <Service />
                    </div>
                </div>
            </div>

        </AppLayout>
    );
}
