import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function AboutPage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="About Us" className="" />
            <section className="py-20 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:text-gray-400">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 space-y-16">

                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-extrabold text-blue-800 dark:text-gray-400">About Us</h1>
                        <p className="mt-4 text-xl text-gray-700 dark:text-gray-400">Welcome to Pay Coin Tap!</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-400">Who We Are</h2>
                            <p className="text-lg mt-4 text-gray-700 dark:text-gray-400">
                                We are a passionate team of crypto enthusiasts, tech lovers, and financial experts. Our diverse backgrounds and expertise allow us to deliver comprehensive content that caters to both beginners and seasoned investors.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-400">What We Offer</h2>
                            <ul className="list-disc list-inside mt-4 space-y-3 text-gray-700 dark:text-gray-400">
                                <li><span className="font-semibold">Educational Content:</span> From beginner guides to advanced trading strategies, helping you maximize your crypto journey.</li>
                                <li><span className="font-semibold">News and Updates:</span> Stay informed on market trends, new technologies, and regulatory changes.</li>
                                <li><span className="font-semibold">Reviews and Recommendations:</span> Honest reviews of wallets, exchanges, and crypto services for informed decisions.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-400">Our Vision</h2>
                        <p className="text-lg mt-4 text-gray-700 dark:text-gray-400">
                            At Pay Coin Tap, we believe that knowledge is power. Our goal is to equip readers with the tools and insights needed to thrive in the digital economy, fostering a community of learning and sharing.
                        </p>
                    </div>

                    <div className="text-center mt-10">
                        <h2 className="text-3xl font-bold text-blue-800 dark:text-gray-400 mb-4">Join Us on Our Journey</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-400">
                            We invite you to explore the future of finance with us. Whether you’re looking to invest, learn, or stay updated, Pay Coin Tap is your resource for all things cryptocurrency.
                        </p>
                        <p className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-400">Thank you for being a part of our community!</p>
                    </div>

                </div>
            </section>
        </AppLayout>
    );
}
