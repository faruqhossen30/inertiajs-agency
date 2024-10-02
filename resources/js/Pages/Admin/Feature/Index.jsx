import ButtonPlus from '@/Components/Button/ButtonPlus';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { EyeIcon } from '@heroicons/react/24/solid';
import {  Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SearchFilter from '@/Components/Table/SearchFilter';
import Pagination from '@/Components/Pagination';


export default function Index({ auth, features }) {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-between items-center">
                <BreadcumComponent pageOne="Features" pageOneRoute="feature.index" />
                <ButtonPlus routeName={route("feature.create")} />
            </div>



            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">

                        <SearchFilter routeName={'feature.index'} />
                            {/* <!-- Table --> */}
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
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
                                                    Name
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-left">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Category
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-left">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                    Action
                                                </span>
                                            </div>
                                        </th>


                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                                    {
                                        features.data.map((item, index) => {
                                            return <tr key={index}>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{index+1}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.title}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.category.name}</span>
                                                    </div>
                                                </td>


                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        {
                                                            item.is_additional == '0' ? <span className="bg-green-500/25 rounded px-3 py-1 text-xs">Feature</span>
                                                            :<span className="bg-red-500/25 rounded px-3 py-1 text-xs">Additional Feature</span>
                                                        }

                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5 flex space-x-1">
                                                        <Link href="" method="Delete" as="button" className="border p-1 rounded-md dark:border-gray-700 text-gray-500">
                                                            <EyeIcon className="w-4 h-4" />
                                                        </Link>

                                                        <Link href={route('feature.edit', item.id)} className="border p-1 rounded-md dark:border-gray-700 text-green-500">
                                                            <PencilIcon className="w-4 h-5" />
                                                        </Link>
                                                        <Link href={route('feature.destroy', item.id)} method="Delete" as="button" className="border p-1 rounded-md dark:border-gray-700 text-red-500">
                                                            <TrashIcon className="w-4 h-4 " />
                                                        </Link>
                                                    </div>

                                                </td>
                                            </tr>
                                        })
                                    }


                                </tbody>
                            </table>
                            {/* <!-- End Table --> */}

                            <hr />
                            <div className="py-5 px-3">
                                <Pagination pagination={features} links={features.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
