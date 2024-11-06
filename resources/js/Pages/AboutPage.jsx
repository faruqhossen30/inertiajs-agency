import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function AboutPage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="About Us" className="" />

            <section className="my-1 py-16 dark:text-gray-400 border">
                <div className="container px-4 mx-auto ">


                    <div className="">
                        <h1 className="text-3xl text-gray-900 dark:text-white font-Montserrat   font-bold">About Us</h1>

                        <p className='py-2 font-Montserrat'>Welcome to Pay Coin Tap!</p>
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

<section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:text-gray-300">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    <div className="text-center mb-10">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">About Us</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Welcome to Pay Coin Tap!</p>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-10">
      <p className="text-lg text-gray-700 dark:text-gray-300">At Pay Coin Tap, we are dedicated to exploring the exciting world of digital currencies and innovative financial technologies. Our mission is to provide insightful and accessible information that empowers our readers to navigate the ever-evolving landscape of cryptocurrency, blockchain, and online payments.</p>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Who We Are</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">We are a passionate team of crypto enthusiasts, tech lovers, and financial experts committed to demystifying the complexities of digital currencies. Our diverse backgrounds and expertise enable us to deliver comprehensive articles, guides, and tutorials that cater to both beginners and seasoned investors.</p>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
        <li>
          <span className="font-semibold">Educational Content:</span> From beginner guides to advanced trading strategies, we cover a wide range of topics to help you understand and make the most of your cryptocurrency journey.
        </li>
        <li>
          <span className="font-semibold">News and Updates:</span> Stay informed with the latest developments in the crypto space, including market trends, new technologies, and regulatory changes.
        </li>
        <li>
          <span className="font-semibold">Reviews and Recommendations:</span> We provide honest reviews of wallets, exchanges, and various crypto-related services, helping you make informed decisions.
        </li>
      </ul>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">At Pay Coin Tap, we believe that knowledge is power. Our goal is to equip our readers with the tools and insights they need to succeed in the digital economy. We aim to foster a community where ideas can be shared, questions can be asked, and experiences can be learned from.</p>
    </div>

    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Join Us on Our Journey</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">We invite you to join us as we explore the future of finance. Whether you’re looking to invest, learn, or simply stay updated, Pay Coin Tap is your go-to resource for all things cryptocurrency.</p>
      <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Thank you for being a part of our community!</p>
    </div>
  </div>
</section>


<section className="py-20 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:text-gray-300">
  <div className="container mx-auto px-6 md:px-12 lg:px-20 space-y-16">

    <div className="text-center mb-10">
      <h1 className="text-4xl font-extrabold text-blue-800 dark:text-white">About Us</h1>
      <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">Welcome to Pay Coin Tap!</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Who We Are</h2>
        <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
          We are a passionate team of crypto enthusiasts, tech lovers, and financial experts. Our diverse backgrounds and expertise allow us to deliver comprehensive content that caters to both beginners and seasoned investors.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">What We Offer</h2>
        <ul className="list-disc list-inside mt-4 space-y-3 text-gray-700 dark:text-gray-300">
          <li><span className="font-semibold">Educational Content:</span> From beginner guides to advanced trading strategies, helping you maximize your crypto journey.</li>
          <li><span className="font-semibold">News and Updates:</span> Stay informed on market trends, new technologies, and regulatory changes.</li>
          <li><span className="font-semibold">Reviews and Recommendations:</span> Honest reviews of wallets, exchanges, and crypto services for informed decisions.</li>
        </ul>
      </div>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Our Vision</h2>
      <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
        At Pay Coin Tap, we believe that knowledge is power. Our goal is to equip readers with the tools and insights needed to thrive in the digital economy, fostering a community of learning and sharing.
      </p>
    </div>

    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold text-blue-800 dark:text-white mb-4">Join Us on Our Journey</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        We invite you to explore the future of finance with us. Whether you’re looking to invest, learn, or stay updated, Pay Coin Tap is your resource for all things cryptocurrency.
      </p>
      <p className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Thank you for being a part of our community!</p>
    </div>

  </div>
</section>



<section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 dark:text-gray-300">
  <div className="container mx-auto px-8 lg:px-20 space-y-16">

    {/* Header Section */}
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-blue-900 dark:text-white">About Us</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Welcome to Pay Coin Tap!</p>
    </div>

    {/* Our Mission Section */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200 dark:border-gray-700">
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        At <span className="font-semibold text-blue-700 dark:text-blue-400">Pay Coin Tap</span>, we’re dedicated to exploring the world of digital currencies and financial tech. Our mission is to deliver accessible, insightful information to help readers navigate cryptocurrency, blockchain, and online payments.
      </p>
    </div>

    {/* Who We Are Section */}
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="bg-gradient-to-tr from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 flex-1">
        <h2 className="text-3xl font-semibold text-blue-900 dark:text-white mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We are a passionate team of crypto enthusiasts, tech lovers, and finance experts. Our combined expertise enables us to create accessible guides, tutorials, and articles for everyone from beginners to seasoned investors.
        </p>
      </div>

      {/* What We Offer Section */}
      <div className="bg-gradient-to-tr from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 flex-1">
        <h2 className="text-3xl font-semibold text-blue-900 dark:text-white mb-4">What We Offer</h2>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed list-disc pl-6">
          <li><span className="font-semibold">Educational Content:</span> Covering everything from beginner guides to advanced trading strategies for your crypto journey.</li>
          <li><span className="font-semibold">News and Updates:</span> Stay on top of market trends, tech developments, and regulatory changes.</li>
          <li><span className="font-semibold">Reviews and Recommendations:</span> Honest reviews of wallets, exchanges, and crypto services to help you make informed decisions.</li>
        </ul>
      </div>
    </div>

    {/* Our Vision Section */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-semibold text-blue-900 dark:text-white mb-4">Our Vision</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        At <span className="font-semibold text-blue-700 dark:text-blue-400">Pay Coin Tap</span>, we believe knowledge is power. We aim to provide the tools and insights for readers to succeed in the digital economy, fostering a community of shared ideas and learning.
      </p>
    </div>

    {/* Join Us Section */}
    <div className="text-center mt-12">
      <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">Join Us on Our Journey</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Join us as we explore the future of finance. Whether investing, learning, or staying updated, <span className="font-semibold text-blue-700 dark:text-blue-400">Pay Coin Tap</span> is your resource for everything cryptocurrency. Thank you for being a part of our community!
      </p>
    </div>

  </div>
</section>


        </AppLayout>
    );
}
