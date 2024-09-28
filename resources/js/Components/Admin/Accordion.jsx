import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function Accordion({ item }) {
    const [open, setOpen] = useState(false);
    return (
        <Disclosure as='div' className="py-2 " >
            <Disclosure.Button onClick={() => setOpen(!open)}
                className={` ${open ? ' border-b-0 border-green-500' : ''} py-3 text-start justify-between bg-white border hs-accordion-active:border-b-gray-50  px-4 inline-flex items-center  gap-x-3 w-full font-semibold  text-gray-800 hover:text-gray-500  rounded-t-lg disabled:opacity-50 disabled:pointer-events-none `}>
                <div className="flex items-center  space-x-3">

                    <span className={` ${open ? 'bg-green-500' : ''} border  px-3 py-1 rounded-md text-white bg-blue-500`}>Q</span>
                    <p className='text-left'>{item.question}</p>
                </div>
                <ChevronUpIcon className={`${open ? 'rotate-180 transform  ' : ''}  h-5 w-5  text-purple-500`} />
            </Disclosure.Button>
            <Disclosure.Panel className={` ${open ? ' border-t-0 border-green-500 rounded-b-md ' : ''}  px-4 pb-2 pt-4 text-sm text-gray-500 border  `}>
                {item.answer}
            </Disclosure.Panel>
        </Disclosure>
    )
}
