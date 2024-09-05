
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';

export default function Create({ auth, feature ,categories}) {
    console.log(feature);
    const { data, setData, put, post, processing, errors, reset } = useForm({
        title      : feature.title,
        category_id: feature.category_id,

    });

    function submit(e) {
        e.preventDefault()
        put(route('feature.update', feature.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Feature" pageOneRoute="feature.index" />

            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Edit FAQ
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel isRequired={true} labelFor="faq" />
                                <Input id="faq" type="text" name="title" value={data.title} autoComplete="title" placeholder="title" onChange={(e) => setData('title', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                            </div>
                            <div className='mt-1'>
                                <InputLabel isRequired={true} labelFor="category" />
                                <select name='category_id' value={data.category_id} id='category' className=" px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" onChange={(e) => setData('category_id', e.target.value)} >
                                    <option value="">Select Category</option>
                                    {
                                        categories.map((cat, index) => {
                                            return <option value={cat.id} key={index}>{cat.name}</option>
                                        })
                                    }
                                </select>
                                <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                            </div>

                            <SubmitButton title={'Update'} />
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
