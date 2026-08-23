import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Incubator from '../../assets/WhatWeDoPhotos/Incubator.webp';
import Spring2025 from '../../assets/WhatWeDoPhotos/Spring 2025 Retreat.webp';
import Fall2025 from '../../assets/WhatWeDoPhotos/Fall 2025 Retreat.webp';

type WhatWeDoInfo = {
    title: string;
    description: string;
    image: string;
};

export default function WhatWeDoSection() {
    const whatWeDoInfoArray: WhatWeDoInfo[] = [
        {
            title: 'Lyceum',
            description:
                'Learn skills related to full stack development, and product building. All under the guidance of our Headmaster. Mandatory for first semester.',
            image: Spring2025,
        },
        {
            title: 'Incubator',
            description:
                'Gain real world experience under the guidance of the incubator chair and senior members of the society on projects that have impact.',
            image: Incubator,
        },
        {
            title: 'Social',
            description:
                'Beyond weekly gatherings, TexhX holds a huge variety of social events including our semesterly retreats and the yearly CS Gala.',
            image: Fall2025,
        },
    ];

    useEffect(() => {
        whatWeDoInfoArray.forEach((item) => {
            const img = new Image();
            img.src = item.image;
        });
    });
    const [selected, setSelected] = useState(0);

    const handlePrevious = () => {
        setSelected((current) =>
            current === 0 ? whatWeDoInfoArray.length - 1 : current - 1,
        );
    };

    const handleNext = () => {
        setSelected((current) => (current + 1) % whatWeDoInfoArray.length);
    };

    return (
        <motion.section className="relative overflow-hidden py-20 text-center text-white/80 md:py-28 lg:py-36">
            <motion.div
                key={whatWeDoInfoArray[selected].title}
                className="absolute inset-0"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
            >
                <img
                    src={whatWeDoInfoArray[selected].image}
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </motion.div>

            <div className="relative z-10 flex flex-col items-center justify-center px-4">
                <motion.p
                    className="text-techx-purple/80 mb-3 bg-white tracking-[0.2em] uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                    What We Do
                </motion.p>
                <motion.h2
                    className="m-1.5 mb-6 text-5xl font-extrabold md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
                >
                    <motion.span
                        key={whatWeDoInfoArray[selected].title}
                        className="text-techx-blue"
                        initial={{
                            opacity: 0.6,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                    >
                        {whatWeDoInfoArray[selected].title}
                    </motion.span>
                </motion.h2>
                <div className="mb-6 flex items-center gap-4">
                    <button
                        type="button"
                        aria-label="Show previous focus area"
                        onClick={handlePrevious}
                        className="border-techx-blue/50 text-techx-blue hover:border-techx-blue hover:bg-techx-blue/15 cursor-pointer rounded-xl border bg-white/5 px-4 py-1.5 text-xl font-semibold transition-colors duration-200"
                    >
                        −
                    </button>
                    <p className="text-sm tracking-[0.16em] text-white/70 uppercase">
                        {selected + 1} / {whatWeDoInfoArray.length}
                    </p>
                    <button
                        type="button"
                        aria-label="Show next focus area"
                        onClick={handleNext}
                        className="border-techx-blue/50 text-techx-blue hover:border-techx-blue hover:bg-techx-blue/15 cursor-pointer rounded-xl border bg-white/5 px-4 py-1.5 text-xl font-semibold transition-colors duration-200"
                    >
                        +
                    </button>
                </div>
                <motion.p
                    key={whatWeDoInfoArray[selected].description}
                    className="max-w-4xl p-1 text-lg leading-relaxed text-white/80 md:text-2xl"
                    initial={{
                        opacity: 0.7,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                    {whatWeDoInfoArray[selected].description}
                </motion.p>
            </div>
        </motion.section>
    );
}