import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { InlineWidget } from "react-calendly";

export default function CalandyPage({ }) {

    return (
        <AppLayout>
            <Head title="Contact" />
            <div className="">
                <InlineWidget url="https://calendly.com/faruqhossen30/book-a-meeting" />
            </div>

        </AppLayout>
    );
}
