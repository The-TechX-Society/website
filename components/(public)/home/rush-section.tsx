// builtin

// external
import Link from "next/link";

// internal
import Button from "@/components/ui/button";
import Div from "@/components/ui/div";

export default function RushSection() {
	return (
		<Div className="text-center space-y-3 py-16" animationScheme="scrollFadeIn">
			<Div animationScheme="scrollFadeIn" childAnimation>
				<h1 className="text-4xl font-colonius">Something About Rush ig</h1>
			</Div>

			<Div animationScheme="scrollFadeIn" childAnimation>
				<h1 className="text-2xl">Some other description or other here</h1>
			</Div>

			<div className="py-4 flex flex-row space-x-4 justify-center">
				<Button colorScheme="primary" animationScheme="scrollFadeIn" childAnimation>
					<Link href="/rush">More Info</Link>
				</Button>
				<Button colorScheme="accent" animationScheme="scrollFadeIn" childAnimation>
					<Link href="https://forms.gle/7NqL1rS4AQZT6khz5">Apply</Link>
				</Button>
			</div>
		</Div>
	);
}
