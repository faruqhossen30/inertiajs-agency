import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function AboutPage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="About Us" className="" />

            <section className="py-16 dark:text-gray-400">
                <div className="container px-4 mx-auto space-y-10">
                    <div className=" border px-10 py-6 dark:hover:border-gray-700 dark:border-gray-700  dark:hover:shadow-xl  hover:shadow-gray-500 hover:border-blue-200  rounded-tl-[100px] rounded-br-[100px]">

                        <h2 className=' py-3 text-3xl text-center font-extrabold dar'>About Us
                        </h2>
                        <p >We offer a wide range of services, including Creative Design, Development, Content Writing, SEO, Video & Animation, Digital Marketing, and Brand Consultancy. Our company’s owner leads every project and personally works with all of our customers. This makes us different from other big design firms.</p>
                        <p className='py-3'>
                            Whether you need a website, a re-brand, a phone app, web development, or print design, we’re here to help. We might not have a bunch of awards, but our creative and digital solutions are made just for you. We focus on understanding and creating simple, portable, and beautiful ideas.

                        </p>
                        <p>
                            We value our customers and want to create designs they’ll love for years. To help businesses connect better with their customers, Boost Care It,  does research focusing on what people want and builds digital experiences. Our team comprises experts who think creatively and work hard to deliver top-quality work quickly.
                        </p>

                    </div>
                    <div className=" border px-10 py-6  dark:hover:border-gray-700 dark:border-gray-700  dark:hover:shadow-xl  hover:shadow-gray-500 hover:border-blue-200  rounded-tl-[100px] rounded-br-[100px]">

                        <h2 className=' py-3 text-3xl text-center font-extrabold dar'>Our Vision
                        </h2>
                        <p>We want to lead the way in the digital world, helping companies shine with our fast and creative services like Design, Development, Content Writing, SEO, Video & Animation, Digital Marketing, Ecommerce, and Brand Consultancy. Our goal is to make your brand known locally and globally with services that are quick, effective, and affordable.</p>

                    </div>
                    <div className=" border px-10 py-6  dark:hover:border-gray-700 dark:border-gray-700  dark:hover:shadow-xl  hover:shadow-gray-500 hover:border-blue-200  rounded-tl-[100px] rounded-br-[100px]">

                        <h2 className=' py-3 text-3xl text-center font-extrabold dar'>Our Mission
                        </h2>
                        <p>Our mission is to help people who need smart and modern solutions in design, development, SEO, content writing, eCommerce, digital marketing, and more. We work really hard to offer a lot of different services with the best quality, passion, and dedication. Our top priority is to make sure you have a great experience while we work on your project.</p>

                    </div>
                    <div className=" border px-10 py-6  dark:hover:border-gray-700 dark:border-gray-700  dark:hover:shadow-xl  hover:shadow-gray-500 hover:border-blue-200  rounded-tl-[100px] rounded-br-[100px]">

                        <h2 className=' py-3 text-3xl text-center font-extrabold dar'>Our values are:
                        </h2>
                        {/* <h2 className='pt-16 pb-6 text-xl font-extrabold'>Our values are:</h2> */}

                        <div className=" space-y-3">
                            <p> <strong>Honesty:</strong> We always tell the truth and do the right thing, even when it's hard.
                            </p>
                            <p> <strong>Doing Our Best:</strong>  We aim to be the best in everything we do. We promise to give our clients top-quality service.
                            </p>
                            <p> <strong>New Ideas:</strong>  We're always thinking of new and better ways to do things. We're not afraid to try something different.
                            </p>
                            <p> <strong>Working Together:</strong>   We believe teamwork is key to success. We work closely with our clients and team to reach our goals
                            </p>
                            <p> <strong> Caring for Our Clients:</strong>   We care about our clients’ success. We take the time to understand what they need and create solutions just for them.

                            </p>
                        </div>

                    </div>




                </div>



            </section>


        </AppLayout>
    );
}
