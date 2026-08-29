// builtin

// external
import type { MotionProps } from "motion/react";

// internal
import type { BaseAnimationConfig } from "../configs";

export interface InfiniteSlideConfig extends BaseAnimationConfig {
	type: "infiniteSlide";
	initialX?: number | `${number}%`;
	endingX?: number | `${number}%`;
}

export function getInfiniteSlideMotionProps(config: InfiniteSlideConfig): MotionProps {
	const { initialX = 0, endingX = "-50%", duration = 12, delay = 0 } = config;

	return {
		initial: { translateX: initialX },
		animate: { translateX: endingX },
		transition: {
			repeat: Infinity,
			delay,
			duration,
			ease: "linear",
		},
	};
}
