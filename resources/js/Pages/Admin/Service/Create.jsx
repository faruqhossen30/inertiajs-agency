import { Head, useForm } from "@inertiajs/react";
import BreadcumComponent from "@/Components/Dashboard/BreadcumComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/Form/InputLabel";
import Input from "@/Components/Form/Input";
import SubmitButton from "@/Components/Form/SubmitButton";
import Select from "react-select";
import RichTextEditor from "@/Components/RichTextEditor";
import ImageFile from "@/Components/Form/ImageFile";

export default function Create({ auth, packages, categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description_code: "",
        description: "",
        thumbnail: null,
        category_ids: [],
        status: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route("service.store"));
    }
    return (
        <AuthenticatedLayout>
            <BreadcumComponent
                pageOne="Services"
                pageOneRoute="service.index"
            />
            <form onSubmit={submit}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Service Create
                                </p>
                            </div>
                            <div className="p-4 md:p-5">
                                <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                                    <div>
                                        <InputLabel
                                            isRequired={true}
                                            labelFor="title"
                                        />
                                        <Input
                                            id="title"
                                            name="title"
                                            value={data.title}
                                            autoComplete="title"
                                            placeholder="Title"
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <p className="text-sm text-red-600 mt-2">
                                            {errors.title}
                                        </p>
                                    </div>
                                    <div className="pb-2">
                                        <InputLabel
                                            isRequired={true}
                                            labelFor="Description"
                                        />
                                        <RichTextEditor
                                            setData={setData}
                                            data={data}
                                            errors={errors}
                                        />
                                        <p className="text-sm text-red-600 mt-20 ">
                                            {errors.description}
                                        </p>
                                    </div>
                                    <SubmitButton title="Save & Next" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Service Create
                                </p>
                            </div>
                            <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">
                                <div>
                                    <InputLabel
                                        isRequired={true}
                                        labelFor="thumbnail"
                                    />
                                    <ImageFile
                                        name="thumbnail"
                                        setData={setData}
                                        errors={errors.thumbnail}
                                        placeholder="Feature Photo"
                                    />
                                    <p className="text-sm text-red-600 mt-2">
                                        {" "}
                                        {errors.thumbnail}{" "}
                                    </p>
                                </div>

                                <div>
                                    <InputLabel
                                        isRequired={true}
                                        labelFor="status"
                                    />
                                    <select
                                        id="status"
                                        name="status"
                                        className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                    >
                                        <option value="">Select Status</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    {errors.status && (
                                        <p className="text-sm text-red-600 mt-2">
                                            {errors.status}
                                        </p>
                                    )}
                                </div>

                                <InputLabel
                                    isRequired={true}
                                    labelFor="Category"
                                />
                                <Select
                                    onChange={(e) =>
                                        setData(
                                            "category_ids",
                                            e.map((item) => item.id)
                                        )
                                    }

                                    isMulti
                                    options={categories}
                                    getOptionLabel={(option) => option.name}
                                    getOptionValue={(option) => option.id}
                                />
                                {errors.category_ids && (
                                    <p className="text-sm dark:text-red-600 mt-2">
                                        {errors.category_ids}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
