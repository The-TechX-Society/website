"use client"
// builtin

// external

// internal
import type { Company } from '@/lib/types/main-page';
import SlidingCompanies from './beyond-section/sliding-companies';


export default function BeyondOurDoorsSection() {
    const companies: Company[] = [
        { name: 'Carnegie Mellon', logo: "/companies/CMU.webp" },
        { name: 'JP Morgan', logo: "/companies/JPMC.webp" },
        { name: 'Meta', logo: "/companies/Meta.webp" },
        { name: 'Robinhood', logo: "/companies/Robinhood.webp" },
        { name: 'Rubrik', logo: "/companies/Rubrik.webp" },
        { name: 'SAS', logo: "/companies/SAS.webp" },
        { name: 'Stripe', logo: "/companies/Stripe.webp" },
        { name: 'Tanium', logo: "/companies/Tanium.webp" },
    ];

    return (
        <section className="bg-techx-background flex flex-col items-center justify-center py-20 text-center text-neutral-3 md:py-28 lg:py-36">
            <p
                className="text-neutral-1 mb-3 bg-neutral-3 tracking-[0.2em] px-0.5 uppercase"
            >
                Beyond Our Doors
            </p>

            <h2
                className="m-1.5 mb-10 text-3xl font-bold md:text-4xl lg:text-5xl"
            >
                Where our members have gone
            </h2>

            <div className="relative w-full overflow-hidden">
                <SlidingCompanies companies={companies} />
            </div>
        </section>
    );
}