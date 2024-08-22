import { Tab } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

function WhatWeDo() {
    return (
        <>
            <div className="container mx-auto flex justify-center py-10">
                <div className="text-center p-8 px-20 border rounded-[30px] space-y-3 shadow-md w-fit ">
                    <h2 className="uppercase font-bold text-gray-800 text-5xl">how we do</h2>
                    <p>At we help businesses achieve their digital marketing goals.</p>
                </div>
            </div>
            <div className="container text-center mx-auto py-10">
                <Tab.Group>
                    <Tab.List className="space-x-3">
                        <Tab className="hover:animate-bounce py-2 px-5 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg border border-gray-400 text-gray-800 hover:border-blue-500 hover:shadow-md hover:shadow-blue-200 hover:text-blue-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 shadow-sm">ANALYZE </Tab>
                        <Tab className="hover:animate-bounce py-2 px-5 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg border border-gray-400 text-gray-800 hover:border-blue-500 hover:shadow-md hover:shadow-blue-200 hover:text-blue-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 shadow-sm">SEO AUDIT</Tab>
                        <Tab className="hover:animate-bounce py-2 px-5 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg border border-gray-400 text-gray-800 hover:border-blue-500 hover:shadow-md hover:shadow-blue-200 hover:text-blue-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 shadow-sm">REVIEW  & UPDATE</Tab>
                        <Tab className="hover:animate-bounce py-2 px-5 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg border border-gray-400 text-gray-800 hover:border-blue-500 hover:shadow-md hover:shadow-blue-200 hover:text-blue-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 shadow-sm">RESEARCH</Tab>
                        <Tab className="hover:animate-bounce py-2 px-5 inline-flex items-center gap-x-2 text-lg font-bold rounded-lg border border-gray-400 text-gray-800 hover:border-blue-500 hover:shadow-md hover:shadow-blue-200 hover:text-blue-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 shadow-sm">OPTIMIZATION</Tab>
                    </Tab.List>

                    <Tab.Panels className="p-8 max-w-5xl mx-auto text-lg">
                        <Tab.Panel>
                            1 Listen to your goal  & find out the SERPS  competting online strength.Listen to your goal & find out the SERPS competting online strength.Listen to your goal & find out the SERPS  competting online strength. Listen to your goal  & find out the SERPS  competting online strength.Listen to your goal & find out the SERPS competting online strength.Listen to your goal & find out the SERPS  competting online
                        </Tab.Panel>
                        <Tab.Panel>
                            2. Listen to your goal  & find out the SERPS  competting online strength.Listen to your goal & find out the SERPS competting online strength.Listen to your goal & find out the SERPS  competting online strength. Listen to your goal  & find out the SERPS  competting online strength.Listen to your goal & find out the SERPS competting online strength.Listen to your goal & find out the SERPS  competting online
                        </Tab.Panel>
                        <Tab.Panel>
                            3. Listen to your goal  & find out the SERPS  competting online strength.Listen to your goal & find out the SERPS competting online strength.Listen to your goal & find out the SERPS  competting online strength. Listen to your goal  & find out the SERPS  competting online strength.Listen to your goal & find out the SERPS competting online strength.Listen to your goal & find out the SERPS  competting online
                        </Tab.Panel>
                        <Tab.Panel>
                            4. Listen to your goal  & find out the SERPS  competting online strength.Listen to your goal & find out the SERPS competting online strength.Listen to your goal & find out the SERPS  competting online strength. Listen to your goal  & find out the SERPS  competting online strength.Listen to your goal & find out the SERPS competting online strength.Listen to your goal & find out the SERPS  competting online
                        </Tab.Panel>
                        <Tab.Panel>
                            5. Listen to your goal  & find out the SERPS  competting online strength.Listen to your goal & find out the SERPS competting online strength.Listen to your goal & find out the SERPS  competting online strength. Listen to your goal  & find out the SERPS  competting online strength.Listen to your goal & find out the SERPS competting online strength.Listen to your goal & find out the SERPS  competting online
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>

        </>
    )
}

export default WhatWeDo
