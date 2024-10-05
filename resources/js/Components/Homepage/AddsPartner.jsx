import React from 'react'

function AddsPartner() {
    return (

        <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="mx-auto text-center mb-6 md:mb-12">
                <h2 className="text-[40px] leading-10 font-bold text-center dark:text-gray-400">Our Advertising Partner</h2>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-3 lg:gap-6">
                <div className="group p-6 md:p-7 bg-gray-100 dark:border-2 border-gray-700 dark:bg-slate-800 rounded-lg ">
                    <img src={window.location.origin + '/partner/google-ads.png'} alt="" />
                </div>

                <div className="group p-4 md:p-7 bg-gray-100 dark:border-2 border-gray-700 dark:bg-slate-800 rounded-lg ">
                    <img src={window.location.origin + '/partner/bing-ads.png'} alt="" />
                </div>

                <div className="group p-4 md:p-7 bg-gray-100 dark:border-2 border-gray-700 dark:bg-slate-800 rounded-lg ">
                    <img src={window.location.origin + '/partner/meta-ads.png'} alt="" />
                </div>

                <div className="group p-4 md:p-7 bg-gray-100 dark:border-2 border-gray-700 dark:bg-slate-800 rounded-lg ">
                    <img src={window.location.origin + '/partner/amazon-ads.png'} alt="" />
                </div>

                <div className="group p-4 md:p-7 bg-gray-100 dark:border-2 border-gray-700 dark:bg-slate-800 rounded-lg ">
                    <img src={window.location.origin + '/partner/linkedin-ads.png'} alt="" />
                </div>

                <div className="group p-4 md:p-7 bg-gray-100 dark:border-2 border-gray-700 dark:bg-slate-800 rounded-lg ">
                    <img src={window.location.origin + '/partner/pinterest-ads.png'} alt="" />
                </div>

                <div className="group p-4 md:p-7 bg-gray-100 dark:border-2 border-gray-700 dark:bg-slate-800 rounded-lg ">
                    <img src={window.location.origin + '/partner/redit-ads.png'} alt="" />
                </div>

                <div className="group p-4 md:p-7 bg-gray-100 dark:border-2 border-gray-700 dark:bg-slate-800 rounded-lg ">
                    <img src={window.location.origin + '/partner/unity-ads.png'} alt="" />
                </div>

                {/* <div className="group p-4 md:p-7 bg-gray-100 dark:border-2 border-gray-700 dark:bg-slate-800 rounded-lg ">
                    <img src={window.location.origin + '/partner/google-ads.png'} alt="" />
                </div>

                <div className="group p-4 md:p-7 bg-gray-100 dark:border-2 border-gray-700 dark:bg-slate-800 rounded-lg ">
                    <img src={window.location.origin + '/partner/google-ads.png'} alt="" />
                </div> */}
            </div>

        </div>

    )
}

export default AddsPartner
