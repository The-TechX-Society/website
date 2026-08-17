// builtin

// external

// internal
import IntroHeader from "@/components/(public)/home/intro-header";
import Navigation from "@/components/ui/navigation";
import RushSection from "@/components/(public)/home/rush-section";
import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";
import Div from "@/components/ui/div";

export default function Home() {
    return (
        <main>
            <Navigation
                colorScheme="primary"
                animationScheme={{ type: "entryFadeIn", delay: 0.3, duration: 1.7 }}
            />

            <IntroHeader />

            <RushSection />

            <div
                className="bg-neutral-1 w-full py-16 px-4 grid grid-cols-2 grid-rows-1"
            >
                <div className="p-3">
                    <div className="flex flex-col h-full">
                        <div className="flex-auto"></div>
                        <Div className="flex-initial space-y-2 md:space-y-6" animationScheme="scrollFadeIn">
                            <Div animationScheme="scrollFadeIn" childAnimation>
                                <h1 className="text-3xl font-colonius">Section heading</h1>
                            </Div>

                            <Div animationScheme="scrollFadeIn" childAnimation>
                                <p className="text-xl pb-3">section description</p>
                            </Div>

                            <Div animationScheme="scrollFadeIn" childAnimation>
                                <Button colorScheme="primary">
                                    <Link href="/about">
                                        Learn More
                                    </Link>
                                </Button>
                            </Div>
                        </Div>
                        <div className="flex-auto"></div>
                    </div>
                </div>

                <Div animationScheme="scrollFadeIn">
                    <Image
                        src="/content/example.png"
                        alt="funsies"
                        width={2048}
                        height={1592}
                        loading="eager"
                    />
                </Div>
            </div>
            { /* Short what do we do + link to about us? */}

            { /* Reach out section? */}
        </main>
    );
}
