// builtin

// external
import { Button as BaseButton } from "@base-ui/react";
import type { ComponentProps } from "react";

// internal
import "./button.css";
import type { ComponentVariant, ComponentVariations } from "@/lib/ui/variants";

interface ButtonProps extends ComponentProps<typeof BaseButton>, ComponentVariations {
    variant: ComponentVariant
}

export function Button({ children, ref, variant, ...props }: ButtonProps) {

    return (
        <BaseButton ref={ref} className={`button ${variant}`} disabled={false} {...props}>
            {children}
        </BaseButton>
    );
}
