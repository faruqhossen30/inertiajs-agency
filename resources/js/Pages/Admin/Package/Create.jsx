
import { Head, useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import ImageFile from '@/Components/Form/ImageFile';
import ServiceStep from '@/Components/Admin/ServiceStep';


export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        thumbnail: null,
        description: '',
    });

    function submit(e) {
        e.preventDefault()
        post(route('package.store'));

    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Packages" pageOneRoute="package.index" />
            <ServiceStep service={service} />
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Package Create
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

                            {/* <div>
                                <InputLabel isRequired={true} labelFor="thumbnail" />
                                <input id="thumbnail" type="file" name="thumbnail"  placeholder="thumbnail" onChange={(e) => setData('thumbnail', e.target.files[0])} />
                                <p className="text-sm text-red-600 mt-2">{errors.thumbnail}</p>
                            </div> */}

                            <div>
                                <InputLabel isRequired={true} labelFor="thumbnail" />
                                <ImageFile name="thumbnail" setData={setData} errors={errors} placeholder="Feature Photo" />
                            </div>
                            <SubmitButton />
                        </form>
                    </div>
                </div>
            </div>





        </AuthenticatedLayout>
    );
}
