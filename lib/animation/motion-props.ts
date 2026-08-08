// builtin

// external
import type { MotionProps } from "motion/react";

// internal
import { throwIfNotExhaustive } from "@/lib/utils/type-safety";
import type { AnimationVariant, AnimationConfig } from "./variants";
import { getScrollFadeInMotionProps } from "./scroll-fade-in/animation";
import type { BaseAnimationConfig } from "./configs";

export function getMotionProps(variant?: AnimationVariant | MotionProps): MotionProps {
	if (!variant) return {};

	if (typeof variant === "object" && !("type" in variant)) {
		return variant;
	}

	const config: AnimationConfig = typeof variant === "string" ? { type: variant } : variant;

	switch (config.type) {
		case "scrollFadeIn":
			return getScrollFadeInMotionProps(config);
		default:
			throwIfNotExhaustive(config);
	}
}

export function getDefaultMotionProps(config: BaseAnimationConfig): Partial<MotionProps> {
	const { duration = 0.3, delay = 0 } = config;

	return { transition: { duration, delay } };
}
