// builtin

// external

// internal
import IntroHeader from "@/components/(public)/home/intro-header";
import Navigation from "@/components/ui/navigation";
import RushSection from "@/components/(public)/home/rush-section";

export default function Home() {
    return (
        <main>
            <Navigation
                colorScheme="primary"
                animationScheme={{ type: "entryFadeIn", delay: 0.3, duration: 1.7 }}
            />

            <IntroHeader />

            <RushSection />

        </main>
    );
}
