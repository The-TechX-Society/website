// builtin

// external
import { Button as BaseButton } from "@base-ui/react";
import type { ComponentProps } from "react";

// internal
import "./button.css";

interface ButtonProps extends ComponentProps<typeof BaseButton> {}

export function Button({ children, ref, ...props }: ButtonProps) {
	return (
		<BaseButton ref={ref} className="button" {...props}>
			{children}
		</BaseButton>
	);
}
