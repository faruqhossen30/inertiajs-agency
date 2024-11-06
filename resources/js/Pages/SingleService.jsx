
import SubmitButton from "@/Components/Form/SubmitButton";
import InputLabel from "@/Components/InputLabel";
import ServiceAccordion from "@/Components/ServiceAccordion";
import AppLayout from "@/Layouts/AppLayout";

import {
    CheckCircleIcon,
    CheckIcon,
    MinusIcon,
    XCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link, Head, useForm } from "@inertiajs/react";
import moment from "moment";
export default function SingleService({ service, reviews, item }) {
    console.log(service);

    const { data, setData, post, processing, errors, reset } = useForm({
        review: "",
        rating: "",
        service_id: service.id,
    });

    function submit(e) {
        e.preventDefault();
        post(route("reviewstore"));
    }

    return (
        <AppLayout>
            <Head title="Service" />
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid grid-cols-12 ">
                    <div className="col-span-10  mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800 dark:text-gray-400 pb-10">
                            {service.title}
                        </h2>
                        <div
                            className="prose-base prose-p:py-0 prose-ul:list-disc prose-ul:py-0 prose-ol:list-decimal prose-ol:py-0 w-full dark:text-gray-400"
                            dangerouslySetInnerHTML={{
                                __html: service.description,
                            }}
                        ></div>
                    </div>
                    <div className="col-span-2"></div>
                </div>
                <hr className="py-10 dark:border-gray-700" />
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800 dark:text-gray-400">
                        Pricing
                    </h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400 ">
                        Whatever your status, our offers evolve according to
                        your needs.
                    </p>
                </div>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
                    <div className="flex flex-col border hover:border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-gray-700">
                        <h4 className="font-medium text-lg text-gray-800 dark:text-gray-400">
                            Basic
                        </h4>
                        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-400">
                            <span className="font-bold text-2xl dark:text-gray-400 pr-1">
                                $
                            </span>
                            {service.basic_price}
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                            All the basics for starting a new business
                        </p>
                        <ul className="mt-7 text-sm bg-gray-50 border dark:bg-slate-900 dark:border-gray-700 rounded-lg mx-5">
                            {service.items.slice(0, 5).map((feature, index) => {
                                return (
                                    <li
                                        className="flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg "
                                        key={index}
                                    >
                                        {feature.standard == "1" ? (
                                            <CheckIcon className="w-5 text-green-500" />
                                        ) : (
                                            <MinusIcon className="w-5 text-gray-400" />
                                        )}

                                        <span className="text-gray-800 dark:text-neutral-400 text-start text-lg">
                                            {feature.feature.title}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                        <Link
                            href={route("order", {
                                id: service.id,
                                package: "basic",
                            })}
                            className="mt-5 py-3 px-5 mx-5 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-gray-700  hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 dark:text-gray-400"
                        >
                            Order Now
                        </Link>
                        <a
                            href="#comparebasic"
                            className="text-blue-500 block mt-3  text-sm underline "
                        >
                            Compare Now
                        </a>
                    </div>
                    <div className="flex flex-col border hover:border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-gray-700">
                        <p className="mb-3">
                            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-gray-100">
                                Most popular
                            </span>
                        </p>
                        <h4 className="font-medium text-lg text-gray-800 dark:text-gray-400">
                            Standard
                        </h4>
                        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-400">
                            <span className="font-bold text-2xl pr-1">$</span>
                            {service.standard_price}
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Everything you need for a growing business
                        </p>

                        <ul className="mt-7 text-sm bg-gray-50 dark:bg-slate-900 border dark:border-gray-700 rounded-lg mx-5">
                            {service.items.slice(0, 5).map((feature, index) => {
                                return (
                                    <li
                                        className="flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-white"
                                        key={index}
                                    >
                                        {feature.standard == "1" ? (
                                            <CheckIcon className="w-5 text-green-500" />
                                        ) : (
                                            <MinusIcon className="w-5 text-gray-400" />
                                        )}

                                        <span className="text-gray-800 dark:text-gray-400 text-center text-lg">
                                            {feature.feature.title}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>

                        <Link
                            href={route("order", {
                                id: service.id,
                                package: "standard",
                            })}
                            className="mt-5 py-3 px-5 mx-5 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-gray-700  hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 dark:text-gray-400"
                        >
                            Order Now
                        </Link>

                        <a
                            href="#comparebasic"
                            className="text-blue-500 block mt-3  text-sm underline "
                        >
                            Compare Now
                        </a>
                    </div>

                    <div className="flex flex-col border hover:border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-gray-700">
                        <h4 className="font-medium text-lg text-gray-800 dark:text-gray-400">
                            Premium
                        </h4>
                        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-400">
                            <span className="font-bold text-2xl dark:text-gray-400  pr-1">
                                $
                            </span>
                            {service.premium_price}
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Advanced features for scaling your business
                        </p>

                        <ul className="mt-7 text-sm bg-gray-50 dark:bg-slate-900 border dark:border-gray-700  rounded-lg mx-5">
                            {service.items.slice(0, 5).map((feature, index) => {
                                return (
                                    <li
                                        className="flex items-center gap-x-2 py-3 px-4 text-sm font-medium text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-white"
                                        key={index}
                                    >
                                        {feature.premium == "1" ? (
                                            <CheckIcon className="w-5 text-green-500" />
                                        ) : (
                                            <MinusIcon className="w-5 text-gray-400" />
                                        )}

                                        <span className="text-gray-800 dark:text-gray-400 text-start text-lg">
                                            {feature.feature.title}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>

                        <Link
                            href={route("order", {
                                id: service.id,
                                package: "premium",
                            })}
                            className="mt-5 py-3 px-5 mx-5 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-gray-700  hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 dark:text-gray-400"
                        >
                            Order Now
                        </Link>

                        <a
                            href="#comparebasic"
                            className="text-blue-500 block mt-3  text-sm underline "
                        >
                            Compare Now
                        </a>
                    </div>
                </div>

                <div className=" pt-20 lg:pt-20" id="comparebasic">
                    <div className="lg:text-center mb-5 lg:mb-12">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-400">
                            Compare plans
                        </h3>
                    </div>

                    <div className="space-y-24 lg:hidden">
                        <section>
                            <div className="px-4 mb-4">
                                <h2 className="text-lg leading-6 font-medium dark:text-gray-400">
                                    Free
                                </h2>
                            </div>
                        </section>
                    </div>

                    <div className="hidden lg:block ">
                        <table className="w-full h-px border dark:divide-gray-700 divide-slate-200 dark:border-gray-700">
                            <caption className="sr-only">
                                Pricing plan comparison
                            </caption>
                            <thead className="sticky top-0 inset-x-0 bg-white dark:bg-slate-800 dark:border dark:rounded-lg border-gray-700  ">
                                <tr className="bg-gray-50 shadow  divide-x   dark:bg-slate-900 dark:divide-gray-700">
                                    <th
                                        className="py-4 ps-6 pe-6 text-sm  font-medium text-gray-800 text-start"
                                        scope="col"
                                    >
                                        <span className="sr-only">
                                            Feature by
                                        </span>
                                        <span className="w-1/4 py-4 px-1 text-base  leading-6 font-medium text-gray-800 text-center dark:text-gray-400 uppercase ">
                                            Plans
                                        </span>
                                    </th>
                                    <th
                                        className="w-1/5 py-4 px-6 text-base leading-6 font-medium text-gray-800 text-center dark:text-gray-400 uppercase"
                                        scope="col"
                                    >
                                        Startup
                                    </th>
                                    <th
                                        className="w-1/5 py-4 px-6 text-base leading-6 font-medium text-gray-800 text-center dark:text-gray-400 uppercase"
                                        scope="col"
                                    >
                                        Team
                                    </th>
                                    <th
                                        className="w-1/5 py-4 px-6 text-base leading-6 font-medium text-gray-800 text-center dark:text-gray-400 uppercase"
                                        scope="col"
                                    >
                                        Enterprise
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" ">
                                <tr className="divide-y text-start dark:hover:bg-slate-900  dark:divide-gray-700 shadow-sm divide-x dark:border-gray-700">
                                    <td className="p-4 py-4 ps-6 pe-6 border dark:border-gray-700 font-bold text-xl divide-x text-gray-600 text-start whitespace-nowrap dark:text-gray-400">
                                        Price
                                    </td>
                                    <td className="p-4 w-3 border dark:border-gray-700 font-bold text-base  text-center text-gray-600  whitespace-normal dark:text-gray-400">
                                        <span className="">
                                            {service.basic_price}$
                                        </span>
                                    </td>
                                    <td className="p-4 border font-bold text-base  text-center text-gray-600  whitespace-normal dark:text-gray-400">
                                        <span className="">
                                            {service.standard_price}$
                                        </span>
                                    </td>
                                    <td className="p-4 border font-bold text-base  text-center text-gray-600  whitespace-normal dark:text-gray-400">
                                        <span className="">
                                            {service.premium_price}$
                                        </span>
                                    </td>
                                </tr>
                                <tr className="divide-y text-start dark:hover:bg-slate-900 dark:divide-gray-700 shadow-sm divide-x dark:border-gray-700">
                                    <td className="p-4 py-4 ps-6 pe-6 border dark:border-gray-700 font-bold text-xl divide-x text-gray-600 text-start whitespace-nowrap dark:text-gray-400">
                                        Description
                                    </td>
                                    <td className="p-4 w-3 border font-bold text-base divide-x text-gray-600 text-start whitespace-normal dark:text-gray-400">
                                        <span className="">
                                            {service.basic_description}
                                        </span>
                                    </td>
                                    <td className="p-4 border font-bold text-base divide-x text-gray-600 text-start whitespace-normal dark:text-gray-400">
                                        <span className="">
                                            {service.standard_description}
                                        </span>
                                    </td>
                                    <td className="p-4 border font-bold text-base divide-x text-gray-600 text-start whitespace-normal dark:text-gray-400">
                                        <span className="">
                                            {service.premium_description}
                                        </span>
                                    </td>
                                </tr>

                                <tr className="divide-y text-center dark:hover:bg-slate-900 dark:divide-gray-700 shadow-sm divide-x dark:border-gray-700">
                                    <td className="p-4 py-4 ps-6 pe-6  border dark:border-gray-700 font-bold text-xl divide-x text-gray-600  text-start whitespace-nowrap  dark:text-gray-400">
                                        Delivery Day
                                    </td>
                                    <td className="p-4    border font-bold text-xl divide-x text-gray-600  text-center whitespace-nowrap  dark:text-gray-400">
                                        <span>{service.basic_day}</span>
                                    </td>
                                    <td className="p-4 p   border font-bold text-xl divide-x text-gray-600  text-center whitespace-nowrap  dark:text-gray-400">
                                        <span>{service.standard_day}</span>
                                    </td>
                                    <td className="p-4   border font-bold text-xl divide-x text-gray-600  text-center whitespace-nowrap  dark:text-gray-400">
                                        <span>{service.premium_day}</span>
                                    </td>
                                </tr>
                                {service.items.map((feature, index) => {
                                    return (
                                        <tr key={index} className="divide-x divide-y dark:hover:bg-slate-900 hover:bg-gray-100  dark:divide-gray-700">
                                            <th
                                                className="py-4 ps-6 pe-6  border dark:border-gray-700 font-bold text-xl divide-x text-gray-600  text-start whitespace-nowrap  dark:text-gray-400 "
                                                scope="row"
                                            >
                                                {feature.feature.title}
                                            </th>

                                            <td className="py-2 px-6 text-center">
                                                {feature.is_additional ?
                                                    <span className="text-gray-800 dark:text-gray-400">{feature.basic}</span>
                                                    : (
                                                        feature.basic == "1" ? (
                                                            <CheckIcon className="mx-auto w-5 text-green-500" />
                                                        ) : (
                                                            <MinusIcon className="mx-auto w-5 dark:text-gray-400" />
                                                        )
                                                    )

                                                }

                                                <span className="sr-only">
                                                    Included in Free
                                                </span>
                                            </td>

                                            <td className="py-3 px-6 text-center">
                                                {feature.is_additional ?
                                                    <span className="text-gray-800 dark:text-gray-400">{feature.standard}</span>
                                                    : (feature.standard == "1" ? (
                                                        <CheckIcon className="mx-auto w-5 text-green-500" />
                                                    ) : (
                                                        <MinusIcon className="mx-auto w-5 dark:text-gray-400" />
                                                    ))
                                                }

                                                <span className="sr-only">
                                                    Included in Startup
                                                </span>
                                            </td>

                                            <td className="py-3 px-6 text-center">

                                                {feature.is_additional ?
                                                    <span className="text-gray-800 dark:text-gray-400">{feature.premium}</span>
                                                    : feature.premium == "1" ? (
                                                        <CheckIcon className="mx-auto w-5 text-green-500" />
                                                    ) : (
                                                        <MinusIcon className="mx-auto w-5 dark:text-gray-400" />
                                                    )
                                                }


                                                <span className="sr-only">
                                                    Included in Enterprise
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}

                                <tr className="divide-y text-center bg-gray-50 dark:bg-slate-900  dark:divide-gray-700 shadow-sm divide-x dark:border-gray-700">
                                    <td></td>
                                    <td className="pb-4">
                                        <Link
                                            href={route("order", {
                                                id: service.id,
                                                package: "basic",
                                            })}
                                            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-neutral-700 dark:text-gray-400 hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50"
                                        >
                                            Order Now
                                        </Link>
                                    </td>
                                    <td className="pb-4">
                                        <Link
                                            href={route("order", {
                                                id: service.id,
                                                package: "standard",
                                            })}
                                            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-neutral-700 dark:text-gray-400 hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50"
                                        >
                                            Order Now
                                        </Link>
                                    </td>
                                    <td className="pb-4">
                                        <Link
                                            href={route("order", {
                                                id: service.id,
                                                package: "premium",
                                            })}
                                            className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  disabled:pointer-events-none   dark:bg-transparent dark:border-neutral-700  hover:text-white dark:hover:bg-slate-900 dark:focus:bg-neutral-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 dark:text-gray-400"
                                        >
                                            Order Now
                                        </Link>
                                    </td>
                                </tr>
                                {/* <tr className="divide dark:divide-gray-700"></tr> */}
                            </tbody>
                        </table>
                    </div>

                    <div className="py-10 mt-10 max-w-4xl mx-auto">
                        {service.faqs.map((item, index) => {
                            return (
                                <ServiceAccordion key={index} item={item} />
                            );
                        })}
                    </div>
                    <div className="grid grid-cols-12 gap-6 py-20">
                        <div className="col-span-8">
                            <span className="text-xl font-bold text-gray-800 dark:text-gray-400">
                                Reviews
                            </span>
                            <p className="pt-6 pb-1 text-lg font-bold text-gray-800 dark:text-gray-400">
                                20 reviews for this Gig
                            </p>
                            <div className="flex items-center justify-start pb-6">
                                <span className="h-4 w-4 text-sm pr-6 font-bold text-gray-800 dark:text-gray-400">
                                    5.0
                                </span>
                                <StarIcon className="h-4 w-4 text-gray-800 dark:text-gray-400" />
                                <StarIcon className="h-4 w-4 text-gray-800 dark:text-gray-400" />
                                <StarIcon className="h-4 w-4 text-gray-800 dark:text-gray-400" />
                                <StarIcon className="h-4 w-4 text-gray-800 dark:text-gray-400" />
                                <StarIcon className="h-4 w-4 text-gray-800 dark:text-gray-400" />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center space-x-4">
                                    <div className="flex space-x-2 hover:bg-gray-200 text-gray-800 dark:text-gray-400 px-2 py-1 rounded">
                                        <strong>5</strong>
                                        <strong>Stars</strong>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                        <div className="bg-gray-600 h-2 rounded-full "></div>
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-400"> (20) </p>
                                </div>
                                <div className="flex justify-between items-center space-x-4">
                                    <div className="flex space-x-2 hover:bg-gray-200 text-gray-800 dark:text-gray-400 px-2  rounded">
                                        <strong>4</strong>
                                        <strong>Stars</strong>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                        <div className="bg-gray-600 h-2 rounded-full w-4/5 "></div>
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-400"> (16) </p>
                                </div>
                                <div className="flex justify-between items-center space-x-4">
                                    <div className="flex space-x-2 hover:bg-gray-200 text-gray-800 dark:text-gray-400 px-2  rounded">
                                        <strong>3</strong>
                                        <strong>Stars</strong>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                        <div className="bg-gray-600 h-2 rounded-full w-3/5"></div>
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-400"> (12) </p>
                                </div>
                                <div className="flex justify-between items-center space-x-4">
                                    <div className="flex space-x-2 hover:bg-gray-200 text-gray-800 dark:text-gray-400 px-2  rounded">
                                        <strong>2</strong>
                                        <strong>Stars</strong>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                        <div className="bg-gray-600 h-2 rounded-full w-2/5"></div>
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-400"> (8) </p>
                                </div>
                                <div className="flex justify-between items-center space-x-4">
                                    <div className="flex space-x-2 hover:bg-gray-200 text-gray-800 dark:text-gray-400 px-2  rounded">
                                        <strong>1</strong>
                                        <strong>Stars</strong>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                        <div className="bg-gray-600 h-2 rounded-full w-1/5"></div>
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-400"> (4) </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="bg-blueGray-100">
                        <div className="grid grid-cols-12 ">
                            <div className="col-span-8">
                                <form onSubmit={submit}>
                                    <div className="border dark:border-gray-700 py-3 px-6 my-6">
                                        <div>
                                            <InputLabel
                                            />
                                            <select
                                                id="rating"
                                                name="rating"
                                                className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                                onChange={(e) =>
                                                    setData(
                                                        "rating",
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="1">
                                                    Select rating{" "}
                                                </option>
                                                <option value="1">One ★</option>
                                                <option value="2"> Two ★★  </option>
                                                <option value="3">Three ★★★</option>
                                                <option value="4"> Four ★★★★  </option>
                                                <option value="5"> Five★★★★★</option>
                                            </select>
                                            <p className="text-sm text-red-600 mt-2">
                                                {errors.rating}
                                            </p>
                                        </div>
                                        <div className="py-2 mx-auto">
                                            <div>
                                                <textarea
                                                    id="review"
                                                    rows={4}
                                                    type="file"
                                                    name="review"
                                                    placeholder="Write about review."
                                                    onChange={(e) =>
                                                        setData(
                                                            "review",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                ></textarea>
                                                <p className="text-sm text-red-600 mt-2"></p>
                                            </div>
                                        </div>

                                        <SubmitButton />
                                    </div>
                                </form>
                                {/* {service.reviews.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="mb-2 border rounded-md px-6 py-6 space-y-6 "
                                        >

                                            {item.users.map((item, index) => {
                                            <div className=" ">
                                                <div className="flex  items-center ">


                                                    <div className="">
                                                        <img
                                                            className="mr-10 h-14 w-14 flex justify-center object-cover  items-center p-1 border shadow-md  rounded-full"
                                                            src={window.location.protocol + '/storage/' + item.reviews.users.avater}
                                                            alt=""
                                                        />
                                                    </div>


                                                    <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                                                    <span className="mr-4 text-lg font-heading font-medium">
                                                        {item.rating}.0
                                                    </span>
                                                    <div className="flex">
                                                        {Array.from({
                                                            length: item.rating,
                                                        }).map((_, index) => (
                                                            <a
                                                                key={index}
                                                                className="inline-block mr-1"
                                                                href="#"
                                                            >
                                                                <svg
                                                                    width="20"
                                                                    height="20"
                                                                    viewBox="0 0 20 20"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                                                                        fill="#FFCB00"
                                                                    ></path>
                                                                </svg>
                                                            </a>
                                                        ))}
                                                    </div>
                                                    <div className="  w-full text-right ">
                                                        <p className=" text-sm text-gray-300  ">
                                                            {moment(
                                                                item.created_at,
                                                                "YYYY/MM/DD"
                                                            ).fromNow()}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="py-4">
                                                    <p>{item.review}</p>
                                                </div>
                                            </div>

                                            ))}
                                        </div>
                                    );
                                })} */}


                                {service.reviews.map((review, reviewIndex) => (
                                    <div
                                        key={reviewIndex}
                                        className="mb-2 border rounded-md px-6 py-6 space-y-6"
                                    >
                                        {review.users && review.users.map((user, userIndex) => (
                                            <div key={userIndex} className="">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img
                                                            className="mr-10 h-14 w-14 flex justify-center object-cover items-center p-1 border shadow-md rounded-full"
                                                            src={user.avatar ? window.location.protocol + '/storage/' + user.avatar : '/user/person-circle.svg'}
                                                            alt="User Avatar"
                                                        />
                                                    </div>
                                                    <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                                                    <span className="mr-4 text-lg font-heading font-medium">
                                                        {review.rating}.0
                                                    </span>
                                                    <div className="flex">
                                                        {Array.from({ length: review.rating }).map((_, starIndex) => (
                                                            <a key={starIndex} className="inline-block mr-1" href="#">
                                                                <svg
                                                                    width="20"
                                                                    height="20"
                                                                    viewBox="0 0 20 20"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                                                                        fill="#FFCB00"
                                                                    ></path>
                                                                </svg>
                                                            </a>
                                                        ))}
                                                    </div>
                                                    <div className="w-full text-right">
                                                        <p className="text-sm text-gray-300">
                                                            {moment(review.created_at, "YYYY/MM/DD").fromNow()}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="py-4">
                                                    <p>{review.review}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </AppLayout>
    );
}
