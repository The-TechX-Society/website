// builtin

// external
import type { MotionProps } from "motion/react";

// internal
import { getDefaultPostTransition, getDefaultPreTransition } from "../motion-props";
import type { BaseAnimationConfig } from "../configs";

export interface EntryFadeInConfig extends BaseAnimationConfig {
    type: "entryFadeIn";
    startX?: number;
    startY?: number;
    startOpacity?: number;
    endOpacity?: number;
}

export function getEntryFadeInMotionProps(
    config: EntryFadeInConfig,
    isChild?: boolean,
): MotionProps {
    const { startX = 0, startY = 0, startOpacity = 0, endOpacity = 1 } = config;

    const baseVariants = {
        visible: {
            x: 0,
            y: 0,
            opacity: endOpacity,
        },
        hidden: {
            x: startX,
            y: startY,
            opacity: startOpacity,
        },
    };

    if (isChild) {
        return {
            variants: baseVariants,
        };
    }

    const parentVariants = {
        visible: {
            ...baseVariants.visible,
            transition: getDefaultPreTransition(config),
        },
        hidden: {
            ...baseVariants.hidden,
            transition: getDefaultPostTransition(config),
        },
    };

    return {
        variants: parentVariants,
        initial: "hidden",
        animate: "visible",
    };
}
