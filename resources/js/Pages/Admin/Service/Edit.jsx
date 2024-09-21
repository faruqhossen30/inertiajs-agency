
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import RichTextEditor from '@/Components/RichTextEditor';
import Select from 'react-select'
import ThumbnailInput from '@/Components/Form/ThumbnailInput';
import { ChevronRightIcon } from '@heroicons/react/24/outline';


export default function Create({ auth, categories, service, selectedCategories }) {
    console.log(selectedCategories);


    // const [data, setData] = useState({
    //     category_ids: selectedCategories.map(item => item.id),
    // });


    const { data, setData, put, post, processing, errors, reset } = useForm({

        title: service.title,
        description_code: service.description_code,
        basic_price: service.basic_price,
        standard_price: service.standard_price,
        premium_price: service.premium_price,
        description: service.description,
        thumbnail: service.thumbnail,
        package: service.package,
        // category_ids    : service.category_ids,
        category_ids: selectedCategories.map(item => item.id),
        // });
        status: service.status,
    });

    //  const handleCategoryChange = (e) => {
    //         setData('category_ids', e.map(item => item.id));
    //     };

    function submit(e) {
        e.preventDefault()
        console.log(data);

        // post(route('serviceupdate', service.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Services" pageOneRoute="service.index" />

            {/* <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Edit Services
                    </p>
                </div>
            </div> */}
            <div className="p-4 md:p-5">
                <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                    <form onSubmit={submit}>
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-8">
                                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                    <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                        <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                            Service Edit
                                        </p>
                                    </div>
                                    <div className="p-4 md:p-5">
                                        <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                                            <div>
                                                <InputLabel isRequired={true} labelFor="title" />
                                                <Input id="title" type="text" name="title" value={data.title} autoComplete="title" placeholder="Title" onChange={(e) => setData('title', e.target.value)} />
                                                <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                            </div>
                                            <div className='pb-6'>
                                                <InputLabel isRequired={true} labelFor="Description" />
                                                <RichTextEditor setData={setData} data={data} />
                                            </div>
                                            <SubmitButton title="Update & Next" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                    <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                        <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                            Service Edit
                                        </p>
                                    </div>
                                    <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">

                                        <div className="max-w-xs">
                                            <InputLabel isRequired={true} labelFor="thumbnail" />
                                            <ThumbnailInput name="thumbnail" thumbnail={data.thumbnail} setData={setData} errors={errors} placeholder="Thumbnail" />
                                        </div>

                                        <div>
                                            <InputLabel isRequired={true} labelFor="status" />
                                            <select id="status" defaultValue={service.status} name="status" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                                onChange={(e) => setData('status', e.target.value)}>
                                                <option value="">Select</option>
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


                                        <InputLabel isRequired={true} labelFor="Category" />
                                        <Select
                                            onChange={(e) => setData('category_ids', e.map(item => item.id))}
                                            isMulti
                                            defaultValue={selectedCategories}
                                            options={categories}
                                            getOptionLabel={option => option.name}
                                            getOptionValue={option => option.id}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between py-10">
                            <div>
                                <button type="submit" className="py-2 px-3 flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn="">
                                    Update & Next
                                    <ChevronRightIcon className="w-5" />
                                </button>
                            </div>
                            <div>
                                <Link href={route('service.package.create', service.id)} className="py-2 px-3 flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn="">
                                    Next
                                    <ChevronRightIcon className="w-5" />
                                </Link>
                            </div>
                        </div>

                        {/* <SubmitButton /> */}
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
