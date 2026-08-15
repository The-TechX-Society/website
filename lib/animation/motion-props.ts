// builtin

// external
import { stagger, type Transition, type MotionProps } from "motion/react";

// internal
import { throwIfNotExhaustive } from "@/lib/utils/type-safety";
import type { AnimationScheme, AnimationConfig } from "./scheme";
import { getScrollFadeInMotionProps } from "./scroll-fade-in/animation";
import type { BaseAnimationConfig } from "./configs";
import { getEntryFadeInMotionProps } from "./entry-fade-in/animation";

export function getMotionProps(scheme?: AnimationScheme, isChild?: boolean): MotionProps {
    if (!scheme) return {};

    if (typeof scheme === "object" && !("type" in scheme)) {
        return scheme;
    }

    const config: AnimationConfig = typeof scheme === "string" ? { type: scheme } : scheme;

    switch (config.type) {
        case "scrollFadeIn":
            return getScrollFadeInMotionProps(config, isChild);
        case "entryFadeIn":
            return getEntryFadeInMotionProps(config, isChild);
        default:
            throwIfNotExhaustive(config);
    }
}

export function getDefaultPreTransition(config: BaseAnimationConfig): Transition {
    const { duration = 0.3, delay = 0, delayChildren = 0, staggerChildren = 0.2 } = config;

    return {
        duration,
        delay,
        delayChildren: stagger(staggerChildren, { startDelay: delayChildren }),
    };
}

export function getDefaultPostTransition(config: BaseAnimationConfig): Transition {
    const { duration = 0.3, delay = 0, delayChildren = 0 } = config;

    return {
        duration,
        delay,
        delayChildren,
    };
}