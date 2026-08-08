// builtin

// external
import type { MotionProps } from "motion/react";

// internal
import { getDefaultMotionProps } from "../motion-props";
import type { BaseAnimationConfig } from "../configs";

export interface ScrollFadeInConfig extends BaseAnimationConfig {
	type: "scrollFadeIn";
	startX?: number;
	startY?: number;
	startOpacity?: number;
	endOpacity?: number;
}

export function getScrollFadeInMotionProps(config: ScrollFadeInConfig): MotionProps {
	const baseProps = getDefaultMotionProps(config);
	const { startX = 0, startY = 10, startOpacity = 0, endOpacity = 1 } = config;

	return {
		...baseProps,
		initial: { x: startX, y: startY, opacity: startOpacity },
		whileInView: { x: 0, y: 0, opacity: endOpacity },
	};
}
