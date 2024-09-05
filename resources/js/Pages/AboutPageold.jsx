import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function AboutPage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="About Us" className="" />

            <section className="py-16">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap mb-32 mt-14 -mx-8">
                        <div className="w-full lg:w-1/2 px-8">
                            <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
                                <div className="py-1 px-3 rounded-lg border border-orange-100 bg-orange-50 flex items-center gap-2  dark:border dark:border-gray-700 dark:text-gray-400 dark:bg-slate-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={8}
                                        height={8}
                                        viewBox="0 0 8 8"
                                        fill="none"
                                    >
                                        <circle cx={4} cy={4} r={3} fill="#FF7100" />
                                    </svg>
                                    <span className="text-orange-500 dark:text-gray-400 text-sm font-medium ">
                                        About Us
                                    </span>
                                </div>
                                <div className="flex items-center flex-wrap gap-3 dark:border border-gray-700 px-3 py-1 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <circle cx={8} cy={8} r={5} stroke="#6F0B45" strokeWidth="1.25" />
                                        <circle
                                            cx={8}
                                            cy={8}
                                            r="7.375"
                                            stroke="#FFC96D"
                                            strokeWidth="1.25"
                                        />
                                        <circle cx={8} cy={8} r={3} fill="#FF7100" />
                                    </svg>
                                    <span className="text-sm font-semibold dark:text-gray-400 ">Meet Solstice</span>
                                </div>
                            </div>
                            <img
                                className="rounded-3xl w-full mb-8"
                                src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/about/picture4.png"
                                alt=""
                            />
                        </div>
                        <div className="w-full lg:w-1/2 px-8">
                            <h1 className="text-5xl lg:text-7xl font-bold font-heading dark:text-gray-400 mb-10 max-w-xs lg:max-w-lg">
                                On a mission to make learning fun
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                We are driven to transform the landscape of learning into a
                                captivating journey of excitement and discovery. Our aim is to infuse
                                every educational experience with the essence of joy, making learning
                                an immersive adventure that fuels curiosity and fosters growth.
                            </p>
                        </div>
                    </div>
                    <div className="border-2  border-gray-200 bg-white dark:bg-slate-800 dark:border-gray-700 rounded-3xl flex flex-wrap mb-32">
                        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                            <div className="md:border-r border-gray-200 px-12">
                                <p className="text-gray-600 mb-2 text-center dark:text-gray-400">Founded</p>
                                <h2 className="text-4xl lg:text-5xl font-semibold text-center dark:text-gray-400">
                                    2023
                                </h2>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                            <div className="lg:border-r border-gray-200 px-12">
                                <p className="text-gray-600 mb-2 text-center dark:text-gray-400">Total funding</p>
                                <h2 className="text-4xl lg:text-5xl font-semibold text-center dark:text-gray-400">
                                    $9.6M
                                </h2>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                            <div className="md:border-r border-gray-200 px-12">
                                <p className="text-gray-600 mb-2 text-center dark:text-gray-400">Team members</p>
                                <h2 className="text-4xl lg:text-5xl font-semibold text-center dark:text-gray-400">
                                    110
                                </h2>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
                            <div className="px-12">
                                <p className="text-gray-600 mb-2 text-center dark:text-gray-400">Nationalities</p>
                                <h2 className="text-4xl lg:text-5xl font-semibold text-center dark:text-gray-400">24</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-32 -mx-8">
                        <div className="w-full lg:w-1/2 px-8">
                            <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-20 max-w-xs lg:max-w-lg dark:text-gray-400">
                                A company with values
                            </h2>
                            <img
                                className="rounded-3xl w-full mb-8"
                                src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/about/picture2.png"
                                alt=""
                            />
                            <img
                                className="rounded-3xl w-full mb-8"
                                src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/about/picture5.png"
                                alt=""
                            />
                        </div>
                        <div className="w-full lg:w-1/2 px-8">
                            <img
                                className="rounded-3xl w-full mb-24"
                                src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/about/picture3.png"
                                alt=""
                            />
                            <p className="text-gray-600 text-lg mb-10 dark:text-gray-400">
                                Diversity, inclusion, and belonging are fundamental to our success. We
                                believe the best solutions occur when a plurality of backgrounds,
                                experiences, and identities work together.
                            </p>
                            <p className="text-gray-600 text-lg dark:text-gray-400">
                                All your operations are connected in a single platform, transforming
                                work into a visible, automated, and collaborative experience. At every
                                turn, you’re supported by smart suggestions and interventions that
                                understand your business and anticipate your needs.
                            </p>
                        </div>
                    </div>
                    <h2 className="text-center text-4xl lg:text-5xl mb-9 font-bold font-heading   dark:text-gray-400">
                        Our investors
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 border-2 rounded-3xl dark:border-gray-700 mb-32 flex flex-wrap py-8">
                        <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
                            <img src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/logos/placeholder-logo1.png" alt="" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
                            <img src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/logos/placeholder-logo2.png" alt="" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
                            <img src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/logos/placeholder-logo3.png" alt="" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
                            <img src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/logos/placeholder-logo4.png" alt="" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
                            <img src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/logos/placeholder-logo5.png" alt="" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
                            <img src="https://static.shuffle.dev/components/preview/0066bef8-104a-41d9-bd92-894baaa0dfce/assets/public/solstice-assets/images/logos/placeholder-logo6.png" alt="" />
                        </div>
                    </div>

                </div>
            </section>


        </AppLayout>
    );
}
