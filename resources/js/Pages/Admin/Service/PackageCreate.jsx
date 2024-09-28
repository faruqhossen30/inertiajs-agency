import { Head, Link, useForm, usePage } from "@inertiajs/react";
import BreadcumComponent from "@/Components/Dashboard/BreadcumComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SubmitButton from "@/Components/Form/SubmitButton";

import Input from "@/Components/Form/Input";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function PackageCreate({ service }) {
    console.log(service);

    const { parmas } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        service_id: service.id,
        // Price
        basic_price: service.basic_price,
        standard_price: service.standard_price,
        premium_price: service.premium_price,
        // Day
        basic_day: service.basic_day,
        standard_day: service.standard_day,
        premium_day: service.premium_day,
        // Description
        basic_description: service.basic_description,
        standard_description: service.standard_description,
        premium_description: service.premium_description

    });

    function submit(e) {
        e.preventDefault();
        post(route("service.package.store", service.id), {
            onSuccess: function (res) {
            },
        });
        console.log(data);
    }



    return (
        <AuthenticatedLayout>
            <BreadcumComponent
                pageOne="Service Feature"
                pageOneRoute="service.index"
            />
            <div className=" flex border px-3 py-2 space-x-2 shadow-sm text-base text-gray-600 dark:text-gray-400 dark:border-gray-700">
                <strong>Service Title :</strong>
                <p>{service.title}</p>
            </div>

            <form onSubmit={submit} className="">
                <div className="px-4 sm:px-6 lg:px-8">

                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <table className="min-w-full divide-y divide-gray-300 border">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                                            >
                                                Name
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Basic
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Standared
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Premium
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        <tr className="p-5 divide-x">
                                            <td className="px-5 py-2">Price</td>
                                            <td className="px-5 py-2">
                                                <Input type="number" name="basic_price" placeholder="$50" value={data.basic_price} onChange={(e) => setData("basic_price", e.target.value)} />
                                                <span className="text-red-500">{errors.basic_price && errors.basic_price}</span>
                                            </td>
                                            <td className="px-5 py-2">
                                                <Input type="number" name="standard_price" placeholder="$100" value={data.standard_price} onChange={(e) => setData("standard_price", e.target.value)} />
                                                <span className="text-red-500">{errors.standard_price && errors.standard_price}</span>
                                            </td>
                                            <td className="px-5 py-2">
                                                <Input type="number" name="premium_price" value={data.premium_price} placeholder="$150" onChange={(e) => setData("premium_price", e.target.value)} />
                                                <span className="text-red-500">{errors.premium_price && errors.premium_price}</span>
                                            </td>
                                        </tr>
                                        <tr className="p-5 divide-x">
                                            <td className="px-5 py-2">Deliver Day</td>
                                            <td className="px-5 py-2">
                                                <Input type="number" name="basic_day" placeholder="7" value={data.basic_day} onChange={(e) => setData("basic_day", e.target.value)} />
                                                <span className="text-red-500">{errors.basic_day && errors.basic_day}</span>
                                            </td>
                                            <td className="px-5 py-2">
                                                <Input type="number" name="standard_day" placeholder="15" value={data.standard_day} onChange={(e) => setData("standard_day", e.target.value)} />
                                                <span className="text-red-500">{errors.standard_day && errors.standard_day}</span>
                                            </td>
                                            <td className="px-5 py-2">
                                                <Input type="number" name="premium_day" placeholder="30" value={data.premium_day} onChange={(e) => setData("premium_day", e.target.value)} />
                                                <span className="text-red-500">{errors.premium_day && errors.premium_day}</span>
                                            </td>
                                        </tr>

                                        <tr className="p-5 divide-x">
                                            <td className="px-5 py-2">Description</td>
                                            <td className="px-5 py-2">
                                                <textarea name="basic_description" value={data.basic_description} rows="4" onChange={(e) => setData('basic_description', e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Description" ></textarea>
                                                <span className="text-red-500">{errors.basic_description && errors.basic_description}</span>
                                            </td>
                                            <td className="px-5 py-2">
                                                <textarea name="standard_description" value={data.standard_description} rows="4" onChange={(e) => setData('standard_description', e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Description" ></textarea>
                                                <span className="text-red-500">{errors.standard_description && errors.standard_description}</span>
                                            </td>
                                            <td className="px-5 py-2">
                                                <textarea name="premium_description" value={data.premium_description} rows="4" onChange={(e) => setData('premium_description', e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Description" ></textarea>
                                                <span className="text-red-500">{errors.premium_description && errors.premium_description}</span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-end py-10">
                    <div>
                        <button type="submit" class="py-2 px-3 flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn="">
                            Next
                            <ChevronRightIcon className="w-5" />
                        </button>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
