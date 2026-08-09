// builtin

// external
import { stagger, type Transition, type MotionProps } from "motion/react";

// internal
import { throwIfNotExhaustive } from "@/lib/utils/type-safety";
import type { AnimationScheme, AnimationConfig } from "./scheme";
import { getScrollFadeInMotionProps } from "./scroll-fade-in/animation";
import type { BaseAnimationConfig } from "./configs";

export function getMotionProps(scheme?: AnimationScheme, isChild?: boolean): MotionProps {
    if (!scheme) return {};

    if (typeof scheme === "object" && !("type" in scheme)) {
        return scheme;
    }

    const config: AnimationConfig = typeof scheme === "string" ? { type: scheme } : scheme;

    switch (config.type) {
        case "scrollFadeIn":
            return getScrollFadeInMotionProps(config, isChild);
        default:
            throwIfNotExhaustive(config);
    }
}

export function getDefaultPreTransition(config: BaseAnimationConfig): Transition {
    const { duration = 0.3, delay = 0, staggerChildren = 0.3 } = config;

    return {
        // duration,
        // delay,
        when: "beforeChildren",
        delayChildren: stagger(staggerChildren),
    };
}

export function getDefaultPostTransition(config: BaseAnimationConfig): Transition {
    const { duration = 0.3, delay = 0 } = config;

    return {
        duration,
        delay,
        when: "afterChildren",
    };
}
