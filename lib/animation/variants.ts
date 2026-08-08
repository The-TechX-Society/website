// builtin

// external

// internal
import type { ScrollFadeInConfig } from "./scroll-fade-in/animation";

// MUST BE HAND MAINTAINED (the problem w/ DU types)
export type AnimationConfig = ScrollFadeInConfig;

type AnimationType = AnimationConfig["type"];

export type AnimationVariant = AnimationType | AnimationConfig;

export interface AnimationVariations {
	animation: AnimationVariant;
}
