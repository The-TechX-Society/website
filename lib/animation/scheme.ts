// builtin

// external
import type { MotionProps } from "motion/react";

// internal
import type { ScrollFadeInConfig } from "./scroll-fade-in/animation";

// MUST BE HAND MAINTAINED (the problem w/ DU types)
export type AnimationConfig = ScrollFadeInConfig;

type AnimationType = AnimationConfig["type"];

export type AnimationScheme = AnimationType | AnimationConfig | MotionProps;

export interface AnimatedComponent {
	animation?: AnimationScheme;
	isChildAnimation?: boolean;
}
