// builtin

// external
import type { MotionProps } from "motion/react";

// internal
import { AnimationVariant } from "./variants";

export function getMotionProps(type: AnimationVariant): MotionProps {
	switch (type) {
		case AnimationVariant.SCROLL_FADE_UP:
			return {
				initial: { y: 10, opacity: 0 },
				whileInView: { y: 0, opacity: 1 },
			};
	}
}
