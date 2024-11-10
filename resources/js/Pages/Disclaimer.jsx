import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { FaDollarSign, FaGavel, FaHandshake, FaQuestionCircle, FaUserShield } from 'react-icons/fa';

export default function AboutPage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="About Us" className="" />
            <div class="container mx-auto px-4 py-10">

        <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">Disclaimer</h1>

        <section class="bg-white  font- dark:bg-gray-700 dark:text-gray-300 text p-6 rounded-lg shadow-md mb-6">
            <h2 class="text-2xl dark:text-gray-400 font-semibold text-gray-900 mb-4">General Disclaimer</h2>
            <p>
                The information provided by [Your Company Name] on [Your Website] is for general informational purposes only.
                All information on the site is provided in good faith, however, we make no representation or warranty of any
                kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or availability of any
                information on the site.
            </p>
        </section>


        <section class="bg-white  font- dark:bg-gray-700 dark:text-gray-300 text p-6 rounded-lg shadow-md mb-6">
            <h2 class="text-2xl dark:text-gray-400 font-semibold text-gray-900 mb-4">External Links Disclaimer</h2>
            <p>
                The site may contain (or you may be sent through the site) links to other websites or content belonging to or
                originating from third parties or links to websites and features in banners or other advertising. Such
                external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability,
                availability, or completeness by us.
            </p>
        </section>

        <section class="bg-white  font- dark:bg-gray-700 dark:text-gray-300 text p-6 rounded-lg shadow-md mb-6">
            <h2 class="text-2xl dark:text-gray-400 font-semibold text-gray-900 mb-4">Professional Disclaimer</h2>
            <p>
                The site cannot and does not contain [Your Profession] advice. The [Your Profession] information is provided
                for general informational and educational purposes only and is not a substitute for professional advice.
                Accordingly, before taking any actions based upon such information, we encourage you to consult with the
                appropriate professionals.
            </p>
        </section>


        <section class="bg-white  font- dark:bg-gray-700 dark:text-gray-300 text p-6 rounded-lg shadow-md mb-6">
            <h2 class="text-2xl dark:text-gray-400 font-semibold text-gray-900 mb-4">Affiliate Disclaimer</h2>
            <p>
                The site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made
                by you on the affiliate website using such links. Our affiliates include [List Affiliate Partners].
            </p>
        </section>

        <section class="bg-white  font- dark:bg-gray-700 dark:text-gray-300 text p-6 rounded-lg shadow-md">
            <h2 class="text-2xl dark:text-gray-400 font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p>
                In no event shall [Your Company Name], nor its directors, employees, or agents, be liable for any damages of
                any kind arising out of or in connection with your use of the site. This includes, without limitation, direct,
                indirect, incidental, punitive, and consequential damages.
            </p>
        </section>

        <div class="text-center mt-10">
            <a href="/" class="text-blue-500 hover:underline">Back to Home</a>
        </div>
    </div>


        </AppLayout>
    );
}
