import AppLayout from '@/Layouts/AppLayout';
import { Link, Head } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import Slider from '@/Components/Slider';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import FeatureStatus from '@/Components/Homepage/FeatureStatus';
import Feature from '@/Components/Homepage/Feature';
import Client from '@/Components/Homepage/Client';
import Testimonial from '@/Components/Homepage/Testimonial';

export default function Homepage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="Homepage" />
            <HeroSection/>
            <ServiceSection/>
            <FeatureStatus/>
            <Feature/>
            <Client/>
            <Testimonial/>
        </AppLayout>
    );
}
