"use client"
// builtin

// external
import { motion } from 'framer-motion';

// internal


type Company = {
    name: string;
    logo: string;
};

export default function BeyondOurDoorsSection() {
    const companies: Company[] = [
        { name: 'Carnegie Mellon', logo: "/companies/Tanium.webp" },
        { name: 'JP Morgan', logo: "/companies/JPMC.webp" },
        { name: 'Meta', logo: "/companies/Meta.webp" },
        { name: 'Robinhood', logo: "/companies/Robinhood.webp" },
        { name: 'Rubrik', logo: "/companies/Rubrik.webp" },
        { name: 'SAS', logo: "/companies/SAS.webp" },
        { name: 'Stripe', logo: "/companies/Stripe.webp" },
        { name: 'Tanium', logo: "/companies/Tanium.webp" },
    ];

    return (
        <motion.section className="bg-techx-background flex flex-col items-center justify-center py-20 text-center text-white/80 md:py-28 lg:py-36">
            <motion.p
                className="text-techx-purple/80 mb-3 bg-white tracking-[0.2em] uppercase"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
            >
                Beyond Our Doors
            </motion.p>

            <motion.h2
                className="m-1.5 mb-10 text-4xl font-extrabold md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            >
                Where our members have gone
            </motion.h2>

            <motion.div
                className="grid w-full max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-3 lg:grid-cols-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
            >
                {companies.map((company) => (
                    <div
                        key={company.name}
                        className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-5"
                    >
                        <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="mb-3 h-16 w-auto object-contain md:h-20"
                            loading="lazy"
                        />
                        <p className="text-sm font-semibold tracking-wide text-white md:text-base">
                            {company.name}
                        </p>
                    </div>
                ))}
            </motion.div>
        </motion.section>
    );
}