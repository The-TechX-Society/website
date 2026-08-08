// builtin

// external

// internal
import Button from "@/components/ui/button";
import { ColorVariant } from "@/lib/color/variants";

export default function UITest() {
	return (
		<div className="p-4 space-y-12">
			<Button color={ColorVariant.ACCENT} animation="scrollFadeIn">
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

			<Button color={ColorVariant.ACCENT} animation="scrollFadeIn">
				Hello there
			</Button>
		</div>
	);
}
