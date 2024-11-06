
import { Head, useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import ThumbnailInput from '@/Components/Form/ThumbnailInput';


export default function Create({ auth ,team }) {
    const { data, setData, post, processing, errors, reset } = useForm({


        name       : team.name,
        email      : team.email,
        avatar     : team.avatar,
        position   : team.position,
        about      : team.about,
        mobile     : team.mobile,
        address    : team.address,
        facebook   : team.facebook,
        twitter    : team.twitter,
        linkedin   : team.linkedin,
        whatsup    : team.whatsup,
    });

    function submit(e) {
        e.preventDefault()
        post(route('teamupdate', team.id));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Teams" pageOneRoute="teams.index" />

            <form onSubmit={submit}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-8">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Teams Create
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
                                        <InputLabel isRequired={true} labelFor="Email" />
                                        <Input id="Email" type="email" name="email" value={data.email} autoComplete="email" placeholder="email" onChange={(e) => setData('email', e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.name}</p>
                                    </div>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="position" />
                                        <Input id="position" type="text" name="position" value={data.position} autoComplete="position" placeholder="position" onChange={(e) => setData('position', e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.position}</p>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="mobile" />
                                        <Input id="mobile" type="text" name="mobile" value={data.mobile} autoComplete="mobile" placeholder="mobile" onChange={(e) => setData('mobile', e.target.value)} />
                                        <p className="text-sm text-red-600 mt-2">{errors.mobile}</p>
                                    </div>
                                    <div>
                                        <InputLabel isRequired={true} labelFor="About" />
                                        <textarea id="about" rows={5} type="text" name="about" placeholder="Write about " onChange={(e) => setData('about', e.target.value)}
                                            className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">{data.about}</textarea>
                                        <p className="text-sm text-red-600 mt-2">{errors.about}</p>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="Address" />
                                        <textarea id="Address" rows={5} type="text" name="address" placeholder="Write address " onChange={(e) => setData('address', e.target.value)}
                                            className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">{data.address}</textarea>
                                        <p className="text-sm text-red-600 mt-2">{errors.address}</p>
                                    </div>



                                    <SubmitButton title={'Update'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    teams Create
                                </p>
                            </div>
                            <div className="px-2 py-2 sm:px-6 lg:px-4 mx-auto w-full">


                                <div className="">
                                    <InputLabel isRequired={true} labelFor="Thumbnail" />
                                    <div className="max-w-20">
                                        <ThumbnailInput name="avatar" setData={setData} />
                                    </div>

                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="Facebook" />
                                    <Input id="facebook" type="text" name="facebook" value={data.facebook} autoComplete="facebook" placeholder="facebook" onChange={(e) => setData('facebook', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.facebook}</p>
                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="Twitter" />
                                    <Input id="twitter" type="text" name="twitter" value={data.twitter} autoComplete="twitter" placeholder="twitter" onChange={(e) => setData('twitter', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.twitter}</p>
                                </div>

                                <div>
                                    <InputLabel isRequired={true} labelFor="Linkedin" />
                                    <Input id="linkedin" type="text" name="linkedin" value={data.linkedin} autoComplete="linkedin" placeholder="linkedin" onChange={(e) => setData('linkedin', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.linkedin}</p>
                                </div>
                                <div>
                                    <InputLabel isRequired={true} labelFor="Whats'up " />
                                    <Input id="whatsup" type="text" name="whatsup" value={data.whatsup} autoComplete="whatsup" placeholder="whatsup" onChange={(e) => setData('whatsup', e.target.value)} />
                                    <p className="text-sm text-red-600 mt-2">{errors.whatsup}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
