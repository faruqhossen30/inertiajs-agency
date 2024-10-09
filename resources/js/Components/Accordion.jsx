import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function Accordion({ item }) {
    const [open, setOpen] = useState(false);
    return (
        <Disclosure as='div' className="py-2">
            <Disclosure.Button
                onClick={() => setOpen(!open)}
                className={`${open ? 'border-b-0 dark:border-gray-700 border-green-500 rounded-t-md' : 'rounded-md'} py-3 text-start justify-between bg-white
                 dark:bg-slate-800 dark:text-gray-400 border dark:border-gray-700 px-4 inline-flex items-center gap-x-3 w-full font-semibold text-gray-800
                  hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none`} >
                <div className="flex items-center space-x-3">
                    <span className={`${open ? 'bg-green-500' : 'bg-blue-500 dark:bg-gray-600 dark:border-gray-600'
                        } border px-3 py-1 rounded-md text-white`}>Q</span>
                    <p className="text-left">{item.title}</p>
                </div>
                <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500 dark:text-gray-500`} />
            </Disclosure.Button>

            <Disclosure.Panel
                className={`${open ? 'border-t-0 border-green-500 dark:border-gray-700 dark:bg-slate-800 rounded-b-md' : 'rounded-md'
                    } px-4 pb-2 pt-4 text-sm text-gray-500 border`} >
                {item.description}
            </Disclosure.Panel>
        </Disclosure>

    )
}
