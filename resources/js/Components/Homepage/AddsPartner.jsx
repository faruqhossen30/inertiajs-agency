import React from 'react'

function AddsPartner() {
    return (

        <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="mx-auto text-center mb-6 md:mb-12">
                <h2 className="text-[40px] leading-10 font-bold font-Montserrat text-center text-gray-700 dark:text-gray-400">Our Advertising Partner</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-4 px-56 gap-6 lg:gap-6">
                <div className="group md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 dark:border-2  border-gray-700 rounded-lg flex items-center justify-center">
                    <img src={window.location.origin + '/partner/google-ads.png'} className="  h-20 w-44 object-contain" alt="Google Ads" />
                </div>

                <div className="group md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 dark:border-2 border-gray-800 rounded-lg flex items-center justify-center">
                    <img src={window.location.origin + '/partner/bing-ads.png'} className="  h-20 w-44 object-contain" alt="Bing Ads" />
                </div>

                <div className="group md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 dark:border-2 border-gray-800 rounded-lg flex items-center justify-center">
                    <img src={window.location.origin + '/partner/meta business partner.png'} className="  h-20 w-44 object-contain" alt="Meta Business Partner" />
                </div>

                <div className="group md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 dark:border-2 border-gray-800 rounded-lg flex items-center justify-center">
                    <img src={window.location.origin + '/partner/amazon ads.png'} className="  h-20 w-44 object-contain" alt="Amazon Ads" />
                </div>

                <div className="group md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 dark:border-2 border-gray-800 rounded-lg flex items-center justify-center">
                    <img src={window.location.origin + '/partner/linkedin ads.png'} className="  h-20 w-44 object-contain" alt="LinkedIn Ads" />
                </div>

                <div className="group md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 dark:border-2 border-gray-800 rounded-lg flex items-center justify-center">
                    <img src={window.location.origin + '/partner/tiktok ads.png'} className="  h-20 w-44 object-contain" alt="TikTok Ads" />
                </div>

                <div className="group md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 dark:border-2 border-gray-800 rounded-lg flex items-center justify-center">
                    <img src={window.location.origin + '/partner/reddit ads.png'} className="  h-20 w-44 object-contain" alt="Reddit Ads" />
                </div>

                <div className="group md:px-6 md:py-3 bg-gray-100 dark:bg-gray-700 dark:border-2 border-gray-800 rounded-lg flex items-center justify-center">
                    <img src={window.location.origin + '/partner/unity ads.png'} className="  h-20 w-44 object-contain" alt="Unity Ads" />
                </div>
            </div>


        </div>

    )
}

export default AddsPartner
