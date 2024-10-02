import { Head, Link, useForm, usePage } from "@inertiajs/react";
import BreadcumComponent from "@/Components/Dashboard/BreadcumComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SubmitButton from "@/Components/Form/SubmitButton";
import InputLabel from "@/Components/Form/InputLabel";
import Input from "@/Components/Form/Input";


import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Accordion from "@/Components/Admin/Accordion";
import ServiceStep from "@/Components/Admin/ServiceStep";



export default function FaqCreate({ service }) {
    console.log(service);

    const { parmas } = usePage().props;
    const { data, setData, post, processing, errors, reset, form } = useForm({
        service_id: service.id,
        question: '',
        answer: ''
    });

    function submit(e) {
        e.preventDefault();
        post(route("service.faq.store", service.id), {
            onSuccess: function (res) {
                // setData('question','');
                // setData('answer','');
                setData({
                    question: '',
                    answer: ''
                })
            },
        });
    }


    return (
        <AuthenticatedLayout>
            <BreadcumComponent
                pageOne="Service Feature"
                pageOneRoute="service.index"
            />
            <ServiceStep service={service} />
            <div className=" flex border px-3 py-2 space-x-2 shadow-sm text-base text-gray-600 dark:text-gray-400 dark:border-gray-700">
                <strong>Service Title :</strong>
                <p>{service.title}</p>
            </div>

            <div className="flex flex-col bg-white  shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="">
                    <div className="mx-auto">
                        <form onSubmit={submit}>
                            <div className="border p-3 m-5">
                                <Input id="name" type="text" name="question" value={data.question} autoComplete="question" placeholder="Question" onChange={(e) => setData('question', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.question}</p>
                                <Input id="answer" type="text" name="answer" value={data.answer} autoComplete="answer" placeholder="Answer" onChange={(e) => setData('answer', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.answer}</p>
                            </div>
                            <div className="px-4 pb-5">
                                <SubmitButton title="Add" />
                            </div>

                        </form>
                        <div className="space-y-3 py-5">
                            {service.faqs.map((item, index) => {
                                return <div className=" rounded" key={index}>
                                    <div className="flex items-center justify-between border p-2 ">
                                        <div className="divide-y px-4">
                                            <p> <strong>Q:</strong>{item.question}</p>
                                            <p> <strong>A:</strong> {item.answer}</p>
                                        </div>
                                        <div>
                                            <Link href={route('service.faq.destroy', item.id)} method="delete" as="button" className="border border-red-500 p-2 text-red-500 ">Delete</Link>
                                        </div>
                                    </div>

                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
