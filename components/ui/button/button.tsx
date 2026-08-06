"use client";
// builtin

// external
import { Button as BaseButton } from "@base-ui/react";
import { motion } from "motion/react";
import type { ComponentProps } from "react";

import "./button.css";
import type { ColorVariant, ColorVariations } from "@/lib/color/variants";
import { getMotionProps } from "@/lib/animation/motion-props";
import type { AnimationVariant } from "@/lib/animation/variants";

interface ButtonProps extends ComponentProps<typeof BaseButton>, ColorVariations {
	color: ColorVariant;
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
