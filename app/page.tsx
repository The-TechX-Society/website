// builtin

// external

// internal
import Div from "@/components/ui/div";
import Navigation from "@/components/ui/navigation";

export default function Home() {
    return (
        <main>
            <Navigation
                colorScheme="primary"
                animationScheme={{ type: "entryFadeIn", delay: 0.3, duration: 1.7 }}
            />

            <Div
                className="pt-36 px-3 space-y-16"
                animationScheme={{ type: "entryFadeIn", delayChildren: 1.5, staggerChildren: 0.4 }}
            >
                <Div animationScheme={{ type: "entryFadeIn", duration: 1.2, startY: 20 }} childAnimation>
                    <h1 className="text-7xl text-center font-colonius">Some tagline here</h1>
                </Div>

                <Div animationScheme={{ type: "entryFadeIn", startY: 15 }} childAnimation>
                    <h1 className="text-5xl text-center font-colonius">Because why not</h1>
                </Div>
            </Div>
        </main>
    );
}
