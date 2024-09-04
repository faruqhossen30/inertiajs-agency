
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import RichTextEditor from '@/Components/RichTextEditor';
import ImageFile from '@/Components/Form/ImageFile';
import Select from 'react-select'


export default function Create({ auth, categories, service }) {
    console.log(service);
    const { data, setData, put, processing, errors, reset } = useForm({
        title: service.title,
        description_code: service.description_code,
        basic_price: service.basic_price,
        standard_price: service.standard_price,
        premium_price: service.premium_price,
        description: service.description,
        thumbnail: service.thumbnail,
        package: service.package,
        category_ids: service.category_ids,
        status: service.status,
    });



    function submit(e) {
        e.preventDefault()
        put(route('service.update', service.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Services" pageOneRoute="service.index" />

            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Edit Services
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-8">
                                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                        <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                                Service Create
                                            </p>
                                        </div>
                                        <div className="p-4 md:p-5">
                                            <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                                                <div>
                                                    <InputLabel isRequired={true} labelFor="title" />
                                                    <Input id="title" type="text" name="title" value={data.title} autoComplete="title" placeholder="Title" onChange={(e) => setData('title', e.target.value)} />
                                                    <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                                </div>
                                                <div>
                                                    <InputLabel isRequired={true} labelFor="Description" />
                                                    <RichTextEditor setData={setData} data={data} />
                                                </div>
                                                <SubmitButton />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                        <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                                Service Create
                                            </p>
                                        </div>
                                        <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">

                                            <div>
                                                <InputLabel isRequired={true} labelFor="thumbnail" />
                                                <ImageFile name="thumbnail" thumbnail={service.thumbnail}  setData={setData} errors={errors} placeholder="Feature Photo" />
                                            </div>

                                            <div>
                                                <InputLabel isRequired={true} labelFor="status" />
                                                <select id="status" name="status" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                                    onChange={(e) => setData('status', e.target.value)}>
                                                    <option value="1">Yes</option>
                                                    <option value="0">No</option>
                                                </select>
                                                <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                            </div>

                                            <div>
                                                <InputLabel isRequired={true} labelFor="basic price" />
                                                <Input id="basicprice" type="integer" name="premium_price" value={data.basic_price} autoComplete="basic_price" placeholder="basic" onChange={(e) => setData('basic_price', e.target.value)} />
                                                <p className="text-sm text-red-600 mt-2">{errors.basic_price}</p>
                                            </div>
                                            <div>
                                                <InputLabel isRequired={true} labelFor="standard price" />
                                                <Input id="standard_price" type="integer" name="standard_price" value={data.standard_price} autoComplete="standard_price" placeholder="standard" onChange={(e) => setData('standard_price', e.target.value)} />
                                                <p className="text-sm text-red-600 mt-2">{errors.standard_price}</p>
                                            </div>
                                            <div>
                                                <InputLabel isRequired={true} labelFor="premium price" />
                                                <Input id="premium_price" type="integer" name="premium_price" value={data.premium_price} autoComplete="premium_price" placeholder="premium" onChange={(e) => setData('premium_price', e.target.value)} />
                                                <p className="text-sm text-red-600 mt-2">{errors.premium_price}</p>
                                            </div>
                                            {/* <div className='space-y-2'>
                                    {
                                        packages.map((pack, index) => {
                                            return <div className="flex" key={index}>
                                                <input name="package[]" type="checkbox" checked={pack.id} onChange={(e) => setData('package', e.target.checked)} id={index} className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                                <label htmlFor={index} className="text-sm text-gray-500 ms-3 dark:text-neutral-400">{pack.name}</label>
                                            </div>
                                        })
                                    }


                                </div> */}

                                            <InputLabel isRequired={true} labelFor="Category" />
                                            <Select
                                                onChange={(e) => setData('category_ids', e.map(item => item.id))}
                                                isMulti
                                                options={categories}
                                                getOptionLabel={option => option.name}
                                                getOptionValue={option => option.id}
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <SubmitButton />
                        </form>
                    </div>
                </div>
            </div>





        </AuthenticatedLayout>
    );
}
