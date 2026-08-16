// builtin

// external

// internal
import IntroHeader from "@/components/(public)/home/intro-header";
import Button from "@/components/ui/button";
import Div from "@/components/ui/div";
import Navigation from "@/components/ui/navigation";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Navigation
                colorScheme="primary"
                animationScheme={{ type: "entryFadeIn", delay: 0.3, duration: 1.7 }}
            />

            <IntroHeader />

            <Div className="text-center space-y-3 py-16" animationScheme="scrollFadeIn">
                <Div animationScheme="scrollFadeIn" childAnimation>
                    <h1 className="text-4xl font-colonius">Something About Rush ig</h1>
                </Div>

                <Div animationScheme="scrollFadeIn" childAnimation>
                    <h1 className="text-2xl font-colonius">Some other description or other here</h1>
                </Div>

                <div className="py-4 flex flex-row space-x-4 justify-center">
                    <Button colorScheme="primary" animationScheme="scrollFadeIn" childAnimation>
                        <Link href="/rush">More Info</Link>
                    </Button>
                    <Button colorScheme="accent" animationScheme="scrollFadeIn" disabled childAnimation>
                        Open soon...
                        {/* <Link href="/rush">Apply</Link> <-- keep disabled until we release application form */}
                    </Button>
                </div>
            </Div>
        </main>
    );
}
