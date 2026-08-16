// builtin

// external

// internal
import Div from "@/components/ui/div";
import "./intro-header.css";
import Image from "next/image";

export default function IntroHeader() {
    return (
        <Div
            className="relative py-36 px-3 h-screen-remaining"
            animationScheme={{ type: "entryFadeIn", delayChildren: 1.5, staggerChildren: 0.4 }}
        >
            <div className="space-y-16">
                <Div className="z-10" animationScheme={{ type: "entryFadeIn", duration: 1.2, startY: 20 }} childAnimation>
                    <h1 className="text-7xl text-center font-colonius">Some tagline here</h1>
                </Div>

                <Div className="z-10" animationScheme={{ type: "entryFadeIn", startY: 15 }} childAnimation>
                    <h1 className="text-5xl text-center font-colonius">Because why not</h1>
                </Div>
            </div>

            <Div
                className="absolute top-0 left-0 -z-10 h-full w-full"
                animationScheme={{ type: "entryFadeIn", duration: 2.4 }}
                childAnimation
            >
                <Image
                    src="/backgrounds/background_1.png"
                    className=" h-full w-full object-cover opacity-80"
                    alt="background"
                    width={2000}
                    height={1000}
                    loading="eager"
                />
            </Div>
        </Div>
    )
}