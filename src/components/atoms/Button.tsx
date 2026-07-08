import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "unstyled";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:shadow-xl",
  secondary: "bg-secondary-container hover:bg-secondary text-on-secondary-container shadow-lg shadow-secondary/20",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:text-secondary",
  unstyled: "",
};

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps | ButtonLinkProps) {
  if (variant === "unstyled") {
    if ("href" in props && props.href) {
      const linkProps = props as ButtonLinkProps;
      return (
        <a className={className} {...linkProps}>
          {children}
        </a>
      );
    }

    const { type = "button", ...buttonProps } =
      props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={className} type={type} {...buttonProps}>
        {children}
      </button>
    );
  }

  const classes = `rounded-full px-6 py-3 font-label-md transition-all active:scale-95 ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const linkProps = props as ButtonLinkProps;
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } =
    props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={classes}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
