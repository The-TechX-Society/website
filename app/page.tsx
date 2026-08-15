// builtin

// external

// internal
import Div from "@/components/ui/div";
import Navigation from "@/components/ui/navigation";


export default function Home() {
    return (
        <main>
            <Navigation colorScheme="primary" animationScheme={{ type: "entryFadeIn", delay: 1, duration: 0.7 }} />

            <Div className="space-y-24" animationScheme={{ type: "entryFadeIn", delay: 2.0, duration: 0.2, startY: 20 }}>
                <h1>Why Hello There!</h1>

                <p style={{ fontWeight: 300 }}>What is up everyone?</p>
                <p style={{ fontWeight: 300 }}>
                    <i>What is up everyone?</i>
                </p>

                <p style={{ fontWeight: 400 }}>What is up everyone?</p>
                <p style={{ fontWeight: 400 }}>
                    <i>What is up everyone?</i>
                </p>

                <p style={{ fontWeight: 300 }}>What is up everyone?</p>
                <p style={{ fontWeight: 300 }}>
                    <i>What is up everyone?</i>
                </p>

                <p style={{ fontWeight: 400 }}>What is up everyone?</p>
                <p style={{ fontWeight: 400 }}>
                    <i>What is up everyone?</i>
                </p>

            </Div>
        </main>
    );
}
