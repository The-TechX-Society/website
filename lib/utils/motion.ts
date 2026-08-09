// builtin

// external
import type { HTMLElements, HTMLMotionProps } from "motion/react";

// internal

type MotionOmittedProps = "animate" | "transition" | "variants" | "initial" | "whileInView";

export type BaseHTMLMotionProps<Tag extends keyof HTMLElements> = Omit<
	HTMLMotionProps<Tag>,
	MotionOmittedProps
>;
