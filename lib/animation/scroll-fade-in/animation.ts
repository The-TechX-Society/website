// builtin

// external
import type { MotionProps } from "motion/react";

// internal
import { getDefaultPostTransition, getDefaultPreTransition } from "../motion-props";
import type { BaseAnimationConfig } from "../configs";

export interface ScrollFadeInConfig extends BaseAnimationConfig {
	type: "scrollFadeIn";
	startX?: number;
	startY?: number;
	startOpacity?: number;
	endOpacity?: number;
}

export function getScrollFadeInMotionProps(
	config: ScrollFadeInConfig,
	isChild?: boolean,
): MotionProps {
	const { startX = 0, startY = 10, startOpacity = 0, endOpacity = 1 } = config;

	const variants = {
		visible: {
			x: 0,
			y: 0,
			opacity: endOpacity,
			transition: getDefaultPreTransition(config),
		},
		hidden: {
			x: startX,
			y: startY,
			opacity: startOpacity,
			transition: getDefaultPostTransition(config),
		},
	};

	if (isChild) {
		return {
			variants,
		};
	}

	return {
		variants,
		initial: "hidden",
		whileInView: "visible",
	};
}
