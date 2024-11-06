import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function AboutPage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="About Us" className="" />

            <section className="py-16 dark:text-gray-400">
                <div className="container px-4 mx-auto ">


                    <div className="">
                        <h1 className="text-3xl font-bold  text-gray-900 dark:text-white">About Us</h1>

                        <p className='py-2'>Welcome to Pay Coin Tap!</p>
                    </div>

                    <div className="">
                        <p>At Pay Coin Tap, we are dedicated to exploring the exciting world of digital currencies and innovative financial technologies. Our mission is to provide insightful and accessible information that empowers our readers to navigate the ever-evolving landscape of cryptocurrency, blockchain, and online payments.</p>
                    </div>

                    <div className="py-6">
                        <h1 className="text-3xl font-bold  text-gray-900 dark:text-white py-2">Who We Are</h1>

                        <p>We are a passionate team of crypto enthusiasts, tech lovers, and financial experts committed to demystifying the complexities of digital currencies. Our diverse backgrounds and expertise enable us to deliver comprehensive articles, guides, and tutorials that cater to both beginners and seasoned investors.</p>
                    </div>
                    <div className="py-3">
                        <h1 className="text-3xl font-bold  text-gray-900 dark:text-white py-3">What We Offer</h1>
                        <ul role="list" class="marker:text-gray-800 list-disc pl-5 space-y-3 text-gray-800">
                            <li><b className='font-semibold'>Educational Content</b>: From beginner guides to advanced trading strategies, we cover a wide range of topics to help you understand and make the most of your cryptocurrency journey.</li>
                            <li><b>News and Updates</b>: Stay informed with the latest developments in the crypto space, including market trends, new technologies, and regulatory changes.</li>
                            <li><b>Reviews and Recommendations</b>: We provide honest reviews of wallets, exchanges, and various crypto-related services, helping you make informed decisions.</li>
                        </ul>

                    </div>


                    <div className="py-3">
                        <h1 className="text-3xl font-bold  text-gray-900 dark:text-white">Our Vision</h1>

                        <p className='py-2'>At Pay Coin Tap, we believe that knowledge is power. Our goal is to equip our readers with the tools and insights they need to succeed in the digital economy. We aim to foster a community where ideas can be shared, questions can be asked, and experiences can be learned from.</p>
                    </div>
                    <div className="">
                        <h1 className="text-3xl font-bold  text-gray-900 dark:text-white">Join Us on Our Journey</h1>

                        <p className='py-2'>We invite you to join us as we explore the future of finance. Whether you’re looking to invest, learn, or simply stay updated, Pay Coin Tap is your go-to resource for all things cryptocurrency.

                            Thank you for being a part of our community!</p>
                    </div>

                </div>



            </section>


        </AppLayout>
    );
}
