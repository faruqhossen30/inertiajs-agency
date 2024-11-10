import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { FaDollarSign, FaGavel, FaHandshake, FaQuestionCircle, FaUserShield } from 'react-icons/fa';

export default function AboutPage({ auth, user, laravelVersion, phpVersion }) {






    return (
        <AppLayout>
            <Head title="About Us" className="" />
            <section className="bg-white dark:bg-gray-900 py-10 px-5 sm:px-12 lg:px-20">
                <div className="container mx-auto max-w-9xl text-gray-800 dark:text-gray-200">
                    <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Privacy Policy
                    </h1>

                    {/* Introduction */}
                    <div className="mb-8">
                        <p className="text-base leading-relaxed">
                            Welcome to Boost Care IT. Your privacy and data security are our priorities. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our website, products, or services. By using our platform, you agree to the practices detailed below. We’re committed to transparency, so you can feel confident in the data you share with us.
                        </p>
                    </div>

                    <hr className="my-8 border-gray-300 dark:border-gray-700" />

                    {/* Information We Collect */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Information We Collect</h2>
                        <ul className="list-disc list-inside text-sm mt-3 leading-relaxed">
                            <li><strong>Personal Information</strong>: Name, email address, phone number, etc.</li>
                            <li><strong>Usage Data</strong>: Interaction details like pages visited, clicks, and engagement metrics.</li>
                            <li><strong>Device and Browser Information</strong>: Device type, IP address, browser version, etc.</li>
                            <li><strong>Cookies and Tracking Technologies</strong>: Used to enhance user experience and collect preferences.</li>
                        </ul>
                    </div>

                    {/* How We Use Your Information */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">How We Use Your Information</h2>
                        <ul className="list-disc list-inside text-sm mt-3 leading-relaxed">
                            <li><strong>Enhance User Experience</strong>: Personalize visits based on past interactions.</li>
                            <li><strong>Improve Services</strong>: Analyze usage patterns to refine our offerings.</li>
                            <li><strong>Communicate with You</strong>: Send updates, promotions, or support responses.</li>
                            <li><strong>Legal Compliance and Security</strong>: Protect user data and ensure regulatory compliance.</li>
                        </ul>
                    </div>

                    {/* Information Sharing */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Information Sharing and Disclosure</h2>
                        <p className="text-sm mt-3 leading-relaxed">
                            We may share your data under specific circumstances:
                        </p>
                        <ul className="list-disc list-inside text-sm mt-3 leading-relaxed">
                            <li><strong>With Service Providers</strong>: For website operations, payment processing, or analytics.</li>
                            <li><strong>Legal Requirements</strong>: If disclosure is needed to comply with legal processes.</li>
                            <li><strong>Business Transfers</strong>: Data may be transferred if we undergo a merger, acquisition, or sale.</li>
                        </ul>
                    </div>

                    {/* Data Security */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Data Security</h2>
                        <p className="text-sm mt-3 leading-relaxed">
                            We implement industry-standard security practices to protect your data:
                        </p>
                        <ul className="list-disc list-inside text-sm mt-3 leading-relaxed">
                            <li><strong>Encryption</strong>: Secure sensitive information during transmission.</li>
                            <li><strong>Access Controls</strong>: Data access is restricted to authorized personnel only.</li>
                            <li><strong>Regular Audits</strong>: Routine security checks to identify potential vulnerabilities.</li>
                        </ul>
                    </div>

                    {/* Your Rights and Choices */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Your Rights and Choices</h2>
                        <p className="text-sm mt-3 leading-relaxed">
                            We respect your rights regarding your data. You may:
                        </p>
                        <ul className="list-disc list-inside text-sm mt-3 leading-relaxed">
                            <li><strong>Access</strong>: Request copies of the personal data we hold.</li>
                            <li><strong>Rectify</strong>: Update or correct your personal information.</li>
                            <li><strong>Delete</strong>: Request data deletion when it’s no longer needed.</li>
                            <li><strong>Opt-Out</strong>: Unsubscribe from marketing communications.</li>
                        </ul>
                    </div>

                    {/* Cookies */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Cookies and Tracking Technologies</h2>
                        <p className="text-sm mt-3 leading-relaxed">
                            We use cookies to enhance user experience:
                        </p>
                        <ul className="list-disc list-inside text-sm mt-3 leading-relaxed">
                            <li><strong>Essential Cookies</strong>: Necessary for core functionality.</li>
                            <li><strong>Performance Cookies</strong>: Track user behavior for analytics.</li>
                            <li><strong>Advertising Cookies</strong>: Serve relevant ads based on interests.</li>
                        </ul>
                        <p className="text-sm mt-3 leading-relaxed">
                            You can manage cookies via your browser settings or our cookie preference tool.
                        </p>
                    </div>

                    {/* Data Retention */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Data Retention</h2>
                        <p className="text-sm mt-3 leading-relaxed">
                            We retain personal information as long as needed for:
                        </p>
                        <ul className="list-disc list-inside text-sm mt-3 leading-relaxed">
                            <li><strong>Business Purposes</strong>: Enhancing user experience.</li>
                            <li><strong>Legal Obligations</strong>: Compliance with applicable laws.</li>
                            <li><strong>User Requests</strong>: Responding to deletion requests in a timely manner.</li>
                        </ul>
                    </div>

                    <hr className="my-8 border-gray-300 dark:border-gray-700" />

                    {/* Contact Information */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Contact Us</h2>
                        <p className="text-sm mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                            For questions or requests regarding this Privacy Policy, contact us at:
                        </p>
                        <p className="text-sm mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
                            <b>Email:</b> support@boostcareit.com
                        </p>
                        <p className="text-sm mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
                            <b>Phone:</b> +8801939202756
                        </p>
                        <p className="text-sm mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
                            <b>Address:</b> Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
