
import { Head, useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';

import Select from 'react-select'





export default function Create({ auth, services, features }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        service_id: '',
        feature_id: '',
        basic: '',
        standard: '',
        premium: '',

    });



    function submit(e) {
        e.preventDefault()
        post(route('service-feature.store'));

    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Service Feature" pageOneRoute="service.index" />
            <form onSubmit={submit} className="">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white p-5 border">
                    <thead className="bg-gray-50 dark:bg-slate-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left">
                                <div className="flex items-center gap-x-2">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                        S.N
                                    </span>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-left">
                                <div className="flex items-center gap-x-2">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                        S.N
                                    </span>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-left">
                                <div className="flex items-center gap-x-2">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                        title
                                    </span>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-left">
                                <div className="flex items-center gap-x-2">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                        Basic
                                    </span>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-left">
                                <div className="flex items-center gap-x-2">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                        Standart
                                    </span>
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-left">
                                <div className="flex items-center gap-x-2">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                        Premium
                                    </span>
                                </div>
                            </th>



                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 space-y-5 ">

                        {[1, 2, 3, 4, 5, 6].map((item, index) => {
                            return <tr key={index} className="items-center">
                                <td className="h-px w-px whitespace-nowrap">
                                    <div className="px-6 py-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{index+1}</span>
                                    </div>
                                </td>
                                <td className="h-px w-px whitespace-nowrap">
                                    <input type="checkbox" name="" id="" />
                                </td>
                                <td className="h-px w-px whitespace-nowrap">
                                    <div className="px-6 py-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">This is title</span>
                                    </div>
                                </td>
                                <td className="h-px w-px whitespace-nowrap">
                                    <select id="status" name="status" className="py-1 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        onChange={(e) => console.log()}>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p className="text-sm text-red-600 mt-2"></p>
                                </td>
                                <td className="h-px w-px whitespace-nowrap">
                                    <select id="status" name="status" className="py-1 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        onChange={(e) => console.log()}>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p className="text-sm text-red-600 mt-2"></p>
                                </td>
                                <td className="h-px w-px whitespace-nowrap">
                                    <select id="status" name="status" className="py-1 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        onChange={(e) => console.log()}>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p className="text-sm text-red-600 mt-2"></p>
                                </td>



                            </tr>
                        })

                        }


                    </tbody>
                </table>
            </form>

        </AuthenticatedLayout>
    );
}
