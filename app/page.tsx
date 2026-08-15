// builtin

// external

// internal
import Navigation from "@/components/ui/navigation";


export default function Home() {
    return (
        <main>
            <Navigation colorScheme="primary" />

            <div className="space-y-24">
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

            </div>
        </main>
    );
}
