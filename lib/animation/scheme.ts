// builtin

// external
import type { MotionProps } from "motion/react";

// internal
import type { ScrollFadeInConfig } from "./scroll-fade-in/animation";
import type { EntryFadeInConfig } from "./entry-fade-in/animation";
import type { InfiniteSlideConfig } from "./infinite-slide/animation";

// MUST BE HAND MAINTAINED (the problem w/ DU types)
export type AnimationConfig = ScrollFadeInConfig | EntryFadeInConfig | InfiniteSlideConfig;

type AnimationType = AnimationConfig["type"];

export type AnimationScheme = AnimationType | AnimationConfig | MotionProps;

export interface AnimatedComponent {
    animationScheme?: AnimationScheme;
    childAnimation?: boolean;
}

export interface StandaloneAnimatedComponent {
    animationScheme?: AnimationScheme;
}