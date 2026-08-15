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
				className="mt-6 space-y-24"
				animationScheme={{ type: "entryFadeIn", delay: 1.5, duration: 0.5, startY: 20 }}
			>
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
