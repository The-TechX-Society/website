// builtin

// external
import type { MotionProps } from "motion/react";

// internal
import { getDefaultParentPostTransition, getDefaultParentPreTransition } from "../motion-props";
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
            transition: getDefaultParentPreTransition(config),
        },
        hidden: {
            ...baseVariants.hidden,
            transition: getDefaultParentPostTransition(config),
        },
    };

    return {
        variants: parentVariants,
        initial: "hidden",
        whileInView: "visible",
    };
}
