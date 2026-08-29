"use client";
// builtin

// external
import { Button as BaseButton } from "@base-ui/react";
import { motion } from "motion/react";
import type { ComponentProps } from "react";

// internal
import "./button.css";
import type { ColoredComponent } from "@/lib/color";
import { type AnimatedComponent, getMotionProps } from "@/lib/animation";

interface ButtonProps
	extends ComponentProps<typeof BaseButton>,
		AnimatedComponent,
		ColoredComponent {}

export function Button({
	children,
	ref,
	animationScheme,
	childAnimation,
	colorScheme,
	...props
}: ButtonProps) {
	return (
		<BaseButton
			ref={ref}
			className={`button ${colorScheme}`}
			render={<motion.button {...getMotionProps(animationScheme, childAnimation)} />}
			{...props}
		>
			{children}
		</BaseButton>
	);
}
