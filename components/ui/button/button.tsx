// builtin

// external
import { Button as BaseButton } from "@base-ui/react";
import type { ComponentProps, CSSProperties } from "react";

// internal
import "./button.css";

interface ButtonProps extends ComponentProps<typeof BaseButton> {
    variant: 'primary' | 'accent'
}

export function Button({ children, ref, style, ...props }: ButtonProps) {

    const coloredStyle = {
        "--btn-background-color": "var(--primary-1)",
        "--btn-border-color": "var(--neutral-1)",
        "--btn-text-color": "var(--neutral-1)",
        "--btn-hover-color": "var(--primary-2)",
        "--btn-active-color": "var(--primary-3)",
        "--btn-disabled-color": "var(--neutral-1)",
        "--btn-disabled-background-color": "var(--primary-4)",
        "--btn-disabled-border-color": "var(--neutral-1)",
        "--btn-focus-color": "var(--primary-3)",
        ...style
    }
    return (
        <BaseButton ref={ref} className="button" style={coloredStyle} disabled={false} {...props}>
            {children}
        </BaseButton>
    );
}
