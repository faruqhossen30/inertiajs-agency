import AppLayout from '@/Layouts/AppLayout';
import {Head } from '@inertiajs/react';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import Testimonial from '@/Components/Homepage/Testimonial';
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
            {/* <Testimonial reviews = {reviews}/> */}
        </AppLayout>
    );
}
