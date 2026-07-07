import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "unstyled";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:shadow-xl",
  secondary: "bg-secondary-container hover:bg-secondary text-on-secondary-container shadow-lg shadow-secondary/20",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:text-secondary",
  unstyled: "",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({ children, variant = "primary", className = "", type = "button", ...props }: ButtonProps) {
  if (variant === "unstyled") {
    return (
      <button className={className} type={type} {...props}>
        {children}
      </button>
    );
  }

  return (
    <button
      className={`rounded-full px-6 py-3 font-label-md transition-all active:scale-95 ${variants[variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
