import AppLayout from '@/Layouts/AppLayout';
import { Link, Head } from '@inertiajs/react';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import FeatureStatus from '@/Components/Homepage/FeatureStatus';
import Feature from '@/Components/Homepage/Feature';
import Testimonial from '@/Components/Homepage/Testimonial';
import Client from '@/Components/Homepage/Client';
import WhatWeDo from '@/Components/Homepage/WhatWeDo';

export default function Homepage({categories }) {

    return (
        <AppLayout>
            <Head title="Home" />
            <HeroSection />
            <ServiceSection categories={categories} />
            <Client />
            <WhatWeDo />
            <Testimonial />
        </AppLayout>
    );
}
