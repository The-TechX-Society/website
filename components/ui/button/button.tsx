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
import { cn } from "@/lib/tailwind/utils";

interface ButtonProps
    extends ComponentProps<typeof BaseButton>,
    AnimatedComponent,
    ColoredComponent { }

export function Button({
    children,
    ref,
    animationScheme,
    childAnimation,
    colorScheme,
    className,
    ...props
}: ButtonProps) {
    return (
        <BaseButton
            ref={ref}
            className={cn(`button ${colorScheme}`, className)}
            render={<motion.button {...getMotionProps(animationScheme, childAnimation)} />}
            {...props}
        >
            {children}
        </BaseButton>
    );
}
