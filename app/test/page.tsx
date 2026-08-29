"use client";
import FaultyTerminal from "@/components/(public)/home/FaultyTerminal";
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

			<p className="font-colonius">
				Tech
				<span className="font-garamond">
					<b>
						<i>X</i>
					</b>
				</span>
			</p>
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

			<Div
				className="space-y-3 p-2 bg-blue-800"
				animationScheme={{ type: "scrollFadeIn", delayChildren: 1.2, duration: 1.2, startY: 50 }}
			>
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
				<Div animationScheme="scrollFadeIn" childAnimation>
					What 1
				</Div>

				<Div animationScheme="scrollFadeIn" childAnimation>
					What 2
				</Div>

				<Div animationScheme="scrollFadeIn" childAnimation>
					What 3
				</Div>
			</Div>

			<FaultyTerminal
				scale={3}
				pause={true}
				gridMul={[2, 1]}
				digitSize={1.2}
				timeScale={0.5}
				scanlineIntensity={0.5}
				glitchAmount={1}
				flickerAmount={1}
				noiseAmp={1}
				chromaticAberration={0}
				dither={1}
				curvature={0.1}
				tint="#38B6FF"
				pageLoadAnimation
				brightness={0.6}
				mouseReact={false}
				className="w-full h-screen"
			/>
		</div>
	);
}
