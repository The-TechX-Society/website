"use client";
// builtin

// external
import { motion } from "motion/react";

// internal
import { getMotionProps, type AnimatedComponent } from "@/lib/animation";
import type { BaseHTMLMotionProps } from "@/lib/utils/motion";

interface DivProps extends BaseHTMLMotionProps<"div">, AnimatedComponent {}

export function Div({
	children,
	ref,
	animationScheme,
	childAnimation: isChildAnimation,
	...props
}: DivProps) {
	return (
		<motion.div ref={ref} {...getMotionProps(animationScheme, isChildAnimation)} {...props}>
			{children}
		</motion.div>
	);
}
