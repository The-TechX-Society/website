import { motion } from 'framer-motion';
import HackathonPhoto from '../../assets/society-photos/HackathonPhoto.webp';
import Treck from '../../assets/society-photos/Trek.webp';
import BrighStar from '../../assets/society-photos/BrightStar Group Inside 01.webp';
import ImageCard from '../ImageCard';
import Particles from '../ReactBits/Particles';

export default function MissionSection() {
    return (
        <motion.section className="relative flex flex-col items-center justify-center overflow-hidden py-20 text-center text-white/80 md:py-28 lg:py-36">
            <div className="pointer-events-none absolute inset-0 z-0">
                <Particles
                    particleCount={180}
                    particleSpread={8}
                    speed={0.08}
                    particleBaseSize={70}
                    sizeRandomness={0.8}
                    alphaParticles
                    className="h-full w-full"
                />
            </div>

            <motion.p
                className="text-techx-purple/80 relative z-10 mb-3 bg-white tracking-[0.2em] uppercase"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
            >
                Our Mission
            </motion.p>
            <motion.h2
                className="relative z-10 m-1.5 mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            >
                Built for <span className="text-techx-blue">Excellence</span>
            </motion.h2>
            <motion.p
                className="relative z-10 max-w-4xl p-1 text-lg leading-relaxed text-white/80 md:text-2xl"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.55, delay: 0.14, ease: 'easeOut' }}
            >
                TechX takes bright and driven students and develops them into industry
                leading developers, managers, and founders who demand excellence in
                their work and in every part of life.
            </motion.p>
            <div className="relative z-10 flex w-full flex-col justify-center gap-20 p-20 md:flex-row">
                <div>
                    <ImageCard
                        src={HackathonPhoto}
                        alt="Photo of members at a hackathon"
                    />
                </div>
                <div>
                    <ImageCard src={Treck} alt="Members at an industry Trek" />
                </div>
                <div>
                    <ImageCard src={BrighStar} alt="Members working in Wilson Library" />
                </div>
            </div>
        </motion.section>
    );
}