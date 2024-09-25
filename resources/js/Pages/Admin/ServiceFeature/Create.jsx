import { Head, useForm, usePage } from "@inertiajs/react";
import BreadcumComponent from "@/Components/Dashboard/BreadcumComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SubmitButton from "@/Components/Form/SubmitButton";

import { useState } from "react";

export default function Create({ auth, services, features, service }) {
    const { parmas } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        featureids: service.items.map(item => item.feature_id),
        basic:service.items.map(item => item.basic==1 && item.feature_id).filter(Boolean),
        standard: service.items.map(item => item.standard==1 && item.feature_id).filter(Boolean),
        premium: service.items.map(item => item.premium==1 && item.feature_id).filter(Boolean),
    });

    function submit(e) {
        e.preventDefault();
        post(route("service.feature.store", service.id));
    }
    // Feature checkbox
    const [feature, setFeature] = useState([]);
    const featueCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setData("featureids", [...data.featureids, value]);
        } else {
            setData(
                "featureids",
                data.featureids.filter((item) => item !== value)
            );
        }
    };

    // Basic checkbox
    const basicCheckboxChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setData("basic", [...data.basic, value]);
        } else {
            setData(
                "basic",
                data.basic.filter((item) => item !== value)
            );
        }
    };

    // standard checkbox
    const standardCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setData("standard", [...data.standard, value]);
        } else {
            setData(
                "standard",
                data.standard.filter((item) => item !== value)
            );
        }
    };

    // Premium checkbox
    const [premium, setPremium] = useState([]);
    const premiumCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setData("premium", [...data.premium, value]);
        } else {
            setData(
                "premium",
                data.premium.filter((item) => item !== value)
            );
        }
    };

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
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:border-gray-700 p-5 border">
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
                                        Category
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
                        {features.map((item, index) => {

                            return (
                                <tr
                                    key={index}
                                    className="items-center dark:bg-slate-900 dark:border-gray-700" >
                                    <td className="h-px w-px whitespace-nowrap">
                                        <div className="px-6 py-2">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {index + 1}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            name={`featureid[${item.id}]`}
                                            value={item.id}
                                            // checked={service.features.filter((ft)=> console.log(item.id) )}
                                            defaultChecked={data.featureids.includes(item.id)}
                                            onChange={featueCheckboxChange}
                                        />
                                        {/* <span>{console.log(item)}</span> */}
                                    </td>
                                    <td className="h-px w-px whitespace-nowrap">
                                        <div className="px-6 py-2">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {item.title}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="h-px w-px whitespace-nowrap">
                                        <div className="px-6 py-2">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {item.category_id &&
                                                    item.category.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-10 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            name={`basic[${item.id}]`}
                                            value={item.id}
                                            defaultChecked={data.basic.includes(item.id)}
                                            onChange={basicCheckboxChange}
                                        />

                                    </td>
                                    <td className="px-12 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            name={`standart[${item.id}]`}
                                            value={item.id}
                                            defaultChecked={data.standard.includes(item.id)}
                                            onChange={standardCheckboxChange}
                                        />
                                    </td>
                                    <td className="px-12 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            name={`premium[${item.id}]`}
                                            value={item.id}
                                            defaultChecked={data.premium.includes(item.id)}
                                            onChange={premiumCheckboxChange}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <SubmitButton />
            </form>
        </AuthenticatedLayout>
    );
}
