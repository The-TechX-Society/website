"use client"
// builtin

// external
import { Button as BaseButton } from "@base-ui/react";
import { motion } from "motion/react";
import type { ComponentProps } from "react";

import "./button.css";
import type { ComponentVariant, ComponentVariations } from "@/lib/ui/variants";

interface ButtonProps extends ComponentProps<typeof BaseButton>, ComponentVariations {
    variant: ComponentVariant
}

export function Button({ children, ref, variant, ...props }: ButtonProps) {

    return (
        <BaseButton
            ref={ref}
            className={`button ${variant}`}
            render={
                <motion.button
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                />
            }
            {...props}
        >
            {children}
        </BaseButton>
    );
}
