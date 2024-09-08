
import { Head, useForm } from '@inertiajs/react';
import RichTextEditor from '@/Components/RichTextEditor';
import Select from 'react-select'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import ThumbnailInput from '@/Components/Form/ThumbnailInput';

export default function Create({ blog, categories }) {
    const { data, setData, put,post, processing, errors, reset } = useForm({
        title: blog.title,
        description: blog.description,
        thumbnail: blog.thumbnail,
        status: blog.status,
        category_ids: blog.category_ids,
        meta_description: blog.meta_description,
        meta_tag: blog.meta_tag,
        meta_title: blog.meta_title,
    });




    function submit(e) {
        e.preventDefault()
        post(route('blogupdate', blog.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Blogs" pageOneRoute="blogs.index" />

            <form onSubmit={submit}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Blog Edit
                                </p>
                            </div>
                            <div className="p-4 md:p-5">
                                <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                                    <div>
                                        <InputLabel isRequired={true} labelFor="title" />
                                        <Input id="title" type="text" name="title" value={data.title} autoComplete="title" placeholder="title" onChange={(e) => setData('title', e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                    </div>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="Description" />
                                        <RichTextEditor setData={setData} data={data} />
                                    </div>
                                    <div className="pt-12">
                                        <SubmitButton title={'Update'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Category Edit
                                </p>
                            </div>
                            <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">
                                {/* <div>
                                    <InputLabel isRequired={true} labelFor="thumbnail" />
                                    <input id="thumbnail" type="file" name="thumbnail" placeholder="thumbnail" onChange={(e) => setData('thumbnail', e.target.files[0])} />
                                    <p className="text-sm text-red-600 mt-2">{errors.thumbnail}</p>
                                </div> */}
                                {/* <div className="w-full h-44 mb-20">
                                    <InputLabel isRequired={true} labelFor="Thumbnail" />
                                    <ThumbnailInput name="thumbnail" thumbnail={blog.thumbnail} setData={setData} />

                                </div> */}


                                <div className="max-w-xs">
                                    <InputLabel isRequired={true} labelFor="thumbnail" />
                                    <ThumbnailInput name="thumbnail" thumbnail={data.thumbnail} setData={setData} errors={errors} placeholder="Thumbnail" />
                                </div>
                                <div>
                                    <InputLabel isRequired={true} labelFor="status" />
                                    <select id="status" name="status" defaultValue={blog.status} className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        onChange={(e) => setData('status', e.target.value)}>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                </div>


                                {/* <InputLabel isRequired={true} labelFor="Category" />
                                <Select
                                    onChange={(e) => setData('category_ids', e.map(item => item.id))}
                                    isMulti
                                    options={categories}
                                    getOptionLabel={option => option.name}
                                    getOptionValue={option => option.id}
                                /> */}




                                <div>
                                    <InputLabel isRequired={true} labelFor="Meta_title" />
                                    <Input id="Meta_title" type="text" name="meta_title" value={blog.meta_title} autoComplete="meta_title"
                                        placeholder="meta_title" onChange={(e) => setData('meta_title', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.meta_title}</p>
                                </div>

                                <div className="mt-2">
                                    <label for="meta_description" className="sr-only">Meta Description</label>
                                    <textarea id="meta_description" name="meta_description" value={blog.meta_description} rows="4" onChange={(e) => setData('meta_description', e.target.value)} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Meta_description" ></textarea>
                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="meta_tag" />
                                    <Input id="meta_tag" type="text" name="meta_tag" value={blog.meta_tag} autoComplete="meta_tag"
                                        placeholder="meta_tag" onChange={(e) => setData('meta_tag', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.meta_tag}</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </form>





        </AuthenticatedLayout>
    );
}
