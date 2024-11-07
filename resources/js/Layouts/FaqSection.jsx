import Accordion from '@/Components/Accordion';
import { usePage } from '@inertiajs/react'
import React from 'react'

const FaqSection = () => {
    const {faqs} = usePage().props;

    // console.log('faq',faqs);

    return (
        <div className="">
            <div className="w-full px-6 pb-10 md:pb-20 md:pt-12 mx-auto ">
                < div className=" flex justify-center pb-6  ">
                    <span className='text-center text-3xl px-6 font-Montserrat font-extrabold text-gray-950 dark:text-gray-800'>FAQ</span>
                </div>
                <div className="grid grid-cols-12 max-w-5xl mx-auto ">
                    {faqs.map((item, index) => {
                        return <div className="col-span-12 ">
                            <Accordion key={index} item={item} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FaqSection
