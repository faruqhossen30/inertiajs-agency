import { Head, Link, useForm, usePage } from "@inertiajs/react";
import BreadcumComponent from "@/Components/Dashboard/BreadcumComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SubmitButton from "@/Components/Form/SubmitButton";
import Select from "react-select";
import { useState } from "react";
import ServiceStep from "@/Components/Admin/ServiceStep";
import Input from "@/Components/Form/Input";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function AdditionalFeature({ auth, services, features, service, additionalfeatures }) {
    const { parmas } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        service_id: service.id,
        feature_id: '',
        basic: '',
        standard: '',
        premium: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route("service.additional-feature.store", service.id));
        // console.log(data);
    }


    return (
        <AuthenticatedLayout>
            <BreadcumComponent
                pageOne="Service Feature"
                pageOneRoute="service.index"
            />
            <ServiceStep service={service} />
            <div className=" flex border px-3 py-2 my-5 space-x-2 shadow-sm text-base text-gray-600 dark:text-gray-400 dark:border-gray-700">
                <strong>Service Title :</strong>
                <p>{service.title}</p>
            </div>
            <form onSubmit={submit}>
                <div className="border px-5 py-3">

                    <div className="py-5">
                        <Select
                            onChange={(e) =>
                                setData("feature_id", e.id)
                            }
                            options={features}
                            getOptionLabel={(item) => item.title}
                            getOptionValue={(item) => item.id}
                        />
                        <p className="text-sm text-red-600 mt-2">{errors.feature_id}</p>
                    </div>
                    <div className="flex space-x-3">
                        <div className="w-full">
                            <Input id="name" type="text" name="fea" value={data.basic} autoComplete="basic" placeholder="basic" onChange={(e) => setData('basic', e.target.value)} />
                            <p className="text-sm text-red-600 mt-2">{errors.basic}</p>
                        </div>
                        <div className="w-full">
                            <Input id="premium" type="text" name="standard" value={data.standard} autoComplete="standard" placeholder="standard" onChange={(e) => setData('standard', e.target.value)} />
                            <p className="text-sm text-red-600 mt-2">{errors.standard}</p>
                        </div>

                        <div className="w-full">
                            <Input id="premium" type="text" name="premium" value={data.premium} autoComplete="premium" placeholder="premium" onChange={(e) => setData('premium', e.target.value)} />
                            <p className="text-sm text-red-600 mt-2">{errors.premium}</p>
                        </div>

                    </div>
                </div>
                <div className="py-3">
                    <SubmitButton title="Add" />
                </div>
            </form>
            <div>
                <ul class="w-full flex flex-col">



                </ul>


                <div class="flex flex-col">
                    <div class="-m-1.5 overflow-x-auto">
                        <div class="p-1.5 min-w-full inline-block align-middle">
                            <div class="overflow-hidden">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">S.N</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Title</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Basic</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Standart</th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Premium</th>
                                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">

                                        {additionalfeatures.map((item, index) => {
                                            console.log(item);

                                            return <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{index+1}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{item.feature.title}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{item.basic}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{item.standard}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{item.premium}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <Link href={route('service.additional-feature.destroy', item.id)} method="delete" as="button" className="border border-red-500 p-1 text-red-500 rounded ">
                                                        <TrashIcon className="w-5 text-red-500" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </AuthenticatedLayout>
    );
}
