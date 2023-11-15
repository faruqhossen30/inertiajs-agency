import { ServerStackIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Feature() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto">
                <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                    <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
                        Featurs Section
                    </h2>
                    <p className="mt-3 text-gray-800 dark:text-gray-200">
                        The powerful and flexible theme for all kinds of businesses.
                    </p>
                </div>
            </div>


            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                    <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
                        We tackle the challenges start-ups face
                    </h2>
                    <p className="mt-2 md:mt-4 text-gray-500">
                        Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.
                    </p>
                </div>


                <div className="lg:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12">

                        <div className="flex gap-x-5">
                            <ServerStackIcon className="h-8 w-8" />
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Creative minds
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    We choose our teams carefully. Our people are the secret to great work.
                                </p>
                            </div>
                        </div>



                        <div className="flex gap-x-5">
                            <ServerStackIcon className="h-8 w-8" />
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Simple and affordable
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.
                                </p>
                            </div>
                        </div>



                        <div className="flex gap-x-5">
                            <ServerStackIcon className="h-8 w-8" />
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Industry-leading documentation
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    Our documentation and extensive Client libraries contain everything a business needs to build a custom integration.
                                </p>
                            </div>
                        </div>



                        <div className="flex gap-x-5">
                            <ServerStackIcon className="h-8 w-8" />
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Designing for people
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}
