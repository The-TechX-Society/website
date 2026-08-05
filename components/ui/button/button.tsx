// builtin

// external
import { Button as BaseButton } from "@base-ui/react";
import type { ComponentProps } from "react";

// internal
import "./button.css";

interface ButtonProps extends ComponentProps<typeof BaseButton> {
    variant: 'primary' | 'accent'
}

export function Button({ children, ref, variant, ...props }: ButtonProps) {

    return (
        <BaseButton ref={ref} className={`button ${variant}`} disabled={false} {...props}>
            {children}
        </BaseButton>
    );
}
