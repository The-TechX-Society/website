// builtin

// external

// internal
import IntroHeader from "@/components/(public)/home/intro-header";
import Button from "@/components/ui/button";
import Div from "@/components/ui/div";
import Navigation from "@/components/ui/navigation";

export default function Home() {
    return (
        <main>
            <Navigation
                colorScheme="primary"
                animationScheme={{ type: "entryFadeIn", delay: 0.3, duration: 1.7 }}
            />

            <IntroHeader />

            <Div className="text-center space-y-3 pt-4 pb-12" animationScheme="scrollFadeIn">
                <Div animationScheme="scrollFadeIn" childAnimation>
                    <h1 className="text-4xl font-colonius">Rush is now open!</h1>
                </Div>

                <Div animationScheme="scrollFadeIn" childAnimation>
                    <h1 className="text-2xl font-colonius">We'd love for you to join us!</h1>
                </Div>

                <div className="py-4 flex flex-row space-x-4 justify-center">
                    <Button colorScheme="primary" animationScheme="scrollFadeIn" childAnimation>Rush Info</Button>
                    <Button colorScheme="accent" animationScheme="scrollFadeIn" childAnimation>Apply</Button>
                </div>
            </Div>
        </main>
    );
}
