import AppLayout from '@/Layouts/AppLayout';
import { Link, Head } from '@inertiajs/react';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import FeatureStatus from '@/Components/Homepage/FeatureStatus';
import Feature from '@/Components/Homepage/Feature';
import Testimonial from '@/Components/Homepage/Testimonial';
import WhatWeDo from '@/Components/Homepage/WhatWeDo';
import ClientStatus from '@/Components/Homepage/ClientStatus';
import FeatueSection from '@/Components/Homepage/FeatueSection';
import AddsPartner from '@/Components/Homepage/AddsPartner';

export default function Homepage({categories , reviews }) {

    return (
        <AppLayout>
            <Head title="Home" />
            <HeroSection />
            <ServiceSection categories={categories} />
            <ClientStatus />
            <FeatueSection />
            <AddsPartner />
            <Testimonial reviews = {reviews}/>
        </AppLayout>
    );
}
