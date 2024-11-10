import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { FaDollarSign, FaGavel, FaHandshake, FaQuestionCircle, FaUserShield } from 'react-icons/fa';

export default function AboutPage({ auth, user, laravelVersion, phpVersion }) {






    return (
        <AppLayout>
            <Head title="About Us" className="" />

            <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-400">Terms and Conditions</h1>

                    <p className="mb-4 text-lg dark:text-gray-400">
                        Terms and Conditions are crucial for establishing legal clarity between a business and its users, outlining the rules, obligations, and expectations for service usage. They ensure that both parties are protected and understand their rights and responsibilities.
                    </p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-400">What are Terms and Conditions?</h2>
                            <p className="mt-4 text-gray-700 dark:text-gray-400">
                                Terms and Conditions (T&Cs) serve as a legally binding contract between a business and its customers. They specify the acceptable ways in which a service or product should be used and set boundaries to safeguard the provider's rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-400">Key Elements of Terms and Conditions</h2>
                            <ul className="list-disc list-inside space-y-2 mt-4 dark:text-gray-400">
                                <li><b>User Rights and Responsibilities:</b> Defines what users can and cannot do.</li>
                                <li><b>Liability Limitations:</b> Specifies the extent of responsibility a business holds.</li>
                                <li><b>Payment and Refund Policies:</b> Outlines acceptable payment methods and conditions for refunds.</li>
                                <li><b>Termination Clauses:</b> Explains the terms under which a service can be terminated.</li>
                                <li><b>Dispute Resolution:</b> Describes how conflicts will be handled.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-gray-900  dark:text-gray-400">Why Are Terms and Conditions Important?</h2>
                            <p className="mt-4 text-gray-700 dark:text-gray-400">
                                T&Cs are essential for protecting businesses from legal disputes and ensuring that both parties know what to expect from each other. They offer a legal framework that can protect intellectual property, limit liability, and dictate how services should be used.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-gray-900  dark:text-gray-400">Benefits of Having Comprehensive Terms and Conditions</h2>
                            <ul className="list-disc list-inside space-y-2 mt-4 dark:text-gray-400">
                                <li><b>Legal Protection:</b> Provides a legal shield in case of disputes or breaches.</li>
                                <li><b>Clear Expectations:</b> Helps users understand their rights and limitations.</li>
                                <li><b>User Trust:</b> Well-crafted T&Cs can increase transparency and user confidence.</li>
                                <li><b>Enforceability:</b> Sets the grounds for enforcing rules in a court of law.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-gray-900  dark:text-gray-400">Essential Clauses to Include in Your Terms and Conditions</h2>
                            <div className="space-y-4 mt-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800  dark:text-gray-400">1. User Obligations</h3>
                                    <p className="text-gray-700 dark:text-gray-400">Clarifies what is expected from the user while accessing or using the service, including proper use, compliance with the law, and avoiding harmful activities.</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800  dark:text-gray-400">2. Intellectual Property Rights</h3>
                                    <p className="text-gray-700 dark:text-gray-400">Details how content, trademarks, and other intellectual properties are protected and what rights users have.</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800  dark:text-gray-400">3. Limitation of Liability</h3>
                                    <p className="text-gray-700 dark:text-gray-400">Limits the company's liability in case of user dissatisfaction or data loss.</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800  dark:text-gray-400">4. Payment Terms</h3>
                                    <p className="text-gray-700 dark:text-gray-400">Defines the payment schedule, accepted payment methods, and refund policies.</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800  dark:text-gray-400">5. Termination Policy</h3>
                                    <p className="text-gray-700 dark:text-gray-400">Explains when and how the agreement can be terminated, both by the company and the user.</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800  dark:text-gray-400">6. Governing Law and Jurisdiction</h3>
                                    <p className="text-gray-700 dark:text-gray-400">Specifies which laws govern the agreement and where disputes will be resolved.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-gray-900  dark:text-gray-400">How to Create Effective Terms and Conditions</h2>
                            <ul className="list-disc list-inside space-y-2 mt-4 dark:text-gray-400" >
                                <li><b>Understand Your Business Model:</b> Tailor your T&Cs to match your services and target audience.</li>
                                <li><b>Use Clear and Simple Language:</b> Avoid legal jargon; use plain language to make the terms easy to understand.</li>
                                <li><b>Regularly Update Your Terms:</b> Laws and business practices change, making it essential to update your T&Cs regularly.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-semibold text-gray-900  dark:text-gray-400">Frequently Asked Questions (FAQ)</h2>
                            <div className="space-y-4 mt-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800  dark:text-gray-400">1. What Happens if I Violate the Terms?</h3>
                                    <p className="text-gray-700 dark:text-gray-400">Violating the T&Cs can result in account suspension or termination, depending on the severity of the breach.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800  dark:text-gray-400">2. Can I Negotiate Terms?</h3>
                                    <p className="text-gray-700 dark:text-gray-400">No, T&Cs are generally non-negotiable but contact us if you have specific concerns.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800  dark:text-gray-400">3. How Will I Be Notified of Updates?</h3>
                                    <p className="text-gray-700 dark:text-gray-400">Users will be notified via email or through a prominent notice on our website.</p>
                                </div>
                            </div>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-3xl font-semibold text-gray-900  dark:text-gray-400">Need Help?</h2>
                            <p className="mt-4 text-gray-700 dark:text-gray-400">
                                Feel free to contact us at <a href="mailto:boostcareit@gmail.com" className="text-blue-500 dark:text-blue-400">boostcareit@gmail.com</a> or on WhatsApp: <span className="text-blue-500 dark:text-blue-400">01939202756</span>.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

        </AppLayout>
    );
}
