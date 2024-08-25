
import { Head, useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import ThumbnailInput from '@/Components/Form/ThumbnailInput';


export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        designation: '',
        review: '',
        rating: '',
        thumbnail: null,
        date: '',
    });

    function submit(e) {
        e.preventDefault()
        // console.log(data);
        post(route('review.store'));
        // console.log(errors);
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Reviews" pageOneRoute="review.index" />

            <form onSubmit={submit}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Review Create
                                </p>
                            </div>
                            <div className="p-4 md:p-5">
                                <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                                <div>
                                <InputLabel isRequired={true} labelFor="name" />
                                <Input id="name" type="text" name="name" value={data.name} autoComplete="name" placeholder="name" onChange={(e) => setData('name', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.name}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="designation" />
                                <Input id="designation" type="text" name="designation" value={data.designation} autoComplete="designation" placeholder="designation" onChange={(e) => setData('designation', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.designation}</p>
                            </div>

                            <div>
                                <InputLabel isRequired={true} labelFor="Review" />
                                <textarea id="review" rows={5} type="file" name="review" placeholder="Write about Category." onChange={(e) => setData('review', e.target.value)}
                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">{data.review}</textarea>
                                <p className="text-sm text-red-600 mt-2">{errors.review}</p>
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
                                    Review Create
                                </p>
                            </div>
                            <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">

                            <div>
                                <InputLabel isRequired={true} labelFor="Rating" />
                                <select id="rating" name="rating" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                    onChange={(e) => setData('rating', e.target.value)}>
                                    <option value="1">One Star</option>
                                    <option value="2">Two Star</option>
                                    <option value="3">Three Star</option>
                                    <option value="4">Four Star</option>
                                    <option value="5">Five Star</option>
                                </select>
                                <p className="text-sm text-red-600 mt-2">{errors.rating}</p>
                            </div>
                            <div className="">
                                <InputLabel isRequired={true} labelFor="Thumbnail" />
                                <div className="max-w-20">
                                    <ThumbnailInput name="thumbnail" setData={setData} />
                                </div>

                            </div>

                            <div>
                                <InputLabel isRequired={true} labelFor="date" />
                                <Input id="date" type="date" name="date" value={data.date} autoComplete="date" placeholder="date" onChange={(e) => setData('date', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.date}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

{/*
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Review Create
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel isRequired={true} labelFor="name" />
                                <Input id="name" type="text" name="name" value={data.name} autoComplete="name" placeholder="name" onChange={(e) => setData('name', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.name}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="designation" />
                                <Input id="designation" type="text" name="designation" value={data.designation} autoComplete="designation" placeholder="designation" onChange={(e) => setData('designation', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.designation}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="Rating" />
                                <select id="rating" name="rating" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                    onChange={(e) => setData('rating', e.target.value)}>
                                    <option value="1">One Star</option>
                                    <option value="2">Two Star</option>
                                    <option value="3">Three Star</option>
                                    <option value="4">Four Star</option>
                                    <option value="5">Five Star</option>
                                </select>
                                <p className="text-sm text-red-600 mt-2">{errors.rating}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="Review" />
                                <textarea id="review" rows={5} type="file" name="review" placeholder="Write about Category." onChange={(e) => setData('review', e.target.value)}
                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">{data.review}</textarea>
                                <p className="text-sm text-red-600 mt-2">{errors.review}</p>
                            </div>

                            <div className="">
                                <InputLabel isRequired={true} labelFor="Thumbnail" />
                                <div className="max-w-20">
                                    <ThumbnailInput name="thumbnail" setData={setData} />
                                </div>

                            </div>

                            <div>
                                <InputLabel isRequired={true} labelFor="date" />
                                <Input id="date" type="date" name="date" value={data.date} autoComplete="date" placeholder="date" onChange={(e) => setData('date', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.date}</p>
                            </div>

                            <SubmitButton />
                        </form>
                    </div>
                </div>
            </div> */}





        </AuthenticatedLayout>
    );
}
