import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Header from './Header';
import Footer from './Footer';

export default function AppLayout({ children }) {
    return (
        <div className="dark:bg-slate-800">
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    );
}
