"use client"
// builtin

// external

// internal
import Button from "@/components/ui/button";
import Div from "@/components/ui/div";

export default function UITest() {
    return (
        <div className="p-4 space-y-12">
            <Button colorScheme="accent" animationScheme="scrollFadeIn">
                Hello there
            </Button>

            <p style={{ fontWeight: 300 }}>What is up everyone?</p>
            <p style={{ fontWeight: 300 }}>
                <i>What is up everyone?</i>
            </p>

            <p style={{ fontWeight: 400 }}>What is up everyone?</p>
            <p style={{ fontWeight: 400 }}>
                <i>What is up everyone?</i>
            </p>

            <p className="font-colonius">Tech<span className="font-garamond"><b><i>X</i></b></span></p>
            <p style={{ fontWeight: 500 }}>
                <i>What is up everyone?</i>
            </p>

            <p style={{ fontWeight: 700 }}>What is up everyone?</p>
            <p style={{ fontWeight: 700 }}>
                <i>What is up everyone?</i>
            </p>

            <p style={{ fontWeight: 900 }}>What is up everyone?</p>
            <p style={{ fontWeight: 900 }}>
                <i>What is up everyone?</i>
            </p>

            <Div className="space-y-3 p-2 bg-blue-800" animationScheme={{ type: "scrollFadeIn", delay: 1.2, duration: 1.2, startY: 50 }}>
                <Button colorScheme="accent" animationScheme="scrollFadeIn" childAnimation>
                    Hello there
                </Button>

                <Button colorScheme="accent" animationScheme="scrollFadeIn" childAnimation>
                    Hello there 2
                </Button>

                <Button colorScheme="accent" animationScheme="scrollFadeIn" childAnimation>
                    Hello there 3
                </Button>
            </Div>

            <Div className="space-y-3" animationScheme="scrollFadeIn">
                <Div animationScheme="scrollFadeIn" childAnimation>What 1</Div>

                <Div animationScheme="scrollFadeIn" childAnimation>What 2</Div>

                <Div animationScheme="scrollFadeIn" childAnimation>What 3</Div>
            </Div>
        </div>
    );
}
