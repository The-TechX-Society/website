// builtin

// external

// internal
import Div from "@/components/ui/div";
import "./intro-header.css";
import FaultyTerminal from "./FaultyTerminal";

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

            <div className="absolute top-0 left-0 -z-10 h-full w-full">
                <FaultyTerminal
                    scale={3}
                    pause={true}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={0.5}
                    scanlineIntensity={0.5}
                    glitchAmount={1}
                    flickerAmount={1}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={1}
                    curvature={0.1}
                    tint="#38B6FF"
                    pageLoadAnimation
                    brightness={0.6}
                    mouseReact={false}
                />
            </div>
        </Div >
    )
}