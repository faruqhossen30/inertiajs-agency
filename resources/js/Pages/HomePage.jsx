import AppLayout from '@/Layouts/AppLayout';
import { Link, Head } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';

export default function Homepage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="Homepage" />
            <p>Homepage</p>
        </AppLayout>
    );
}
