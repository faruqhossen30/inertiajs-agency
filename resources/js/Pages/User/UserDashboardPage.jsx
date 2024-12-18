import UserSidebarComponent from '@/Components/User/UserSidebarComponent';
import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function UserDashboardPage() {
    return (
        <AppLayout>
            <Head title="Dashboard" />

            <div className="container grid grid-cols-12 gap-5">
                <div className="col-span-3 py-3 hidden md:block">
                    <UserSidebarComponent />
                </div>
                <div className="col-span-12 md:col-span-9 ">
                    <div className="bg-white dark:bg-gray-800 py-2 px-2 my-3 border border-gray-200 dark:border-gray-700 rounded-md">
                        <span className="text-gray-600 dark:text-gray-400 text-lg font-bold">My Dashboard</span>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
