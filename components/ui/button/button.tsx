"use client";
// builtin

// external
import { Button as BaseButton } from "@base-ui/react";
import { motion } from "motion/react";
import type { ComponentProps } from "react";

// internal
import "./button.css";
import type { ColorVariations } from "@/lib/color";
import { type AnimationVariant, type AnimationVariations, getMotionProps } from "@/lib/animation";

interface ButtonProps
	extends ComponentProps<typeof BaseButton>,
		ColorVariations,
		AnimationVariations {
	animation: AnimationVariant;
}

export function Button({ children, ref, color, animation, ...props }: ButtonProps) {
	return (
		<BaseButton
			ref={ref}
			className={`button ${color}`}
			render={<motion.button {...getMotionProps(animation)} />}
			{...props}
		>
			{children}
		</BaseButton>
	);
}
