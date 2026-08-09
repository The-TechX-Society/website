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

			<p style={{ fontWeight: 500 }}>What is up everyone?</p>
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

			<Div className="space-y-3" animationScheme="scrollFadeIn">
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
		</div>
	);
}
