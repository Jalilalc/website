import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "overlay";
type ButtonSize = "default" | "icon";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
}

const baseClasses =
  "inline-flex min-h-11 items-center justify-center font-medium " +
  "transition focus-visible:outline-none focus-visible:ring-2 " +
  "disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "rounded-md bg-emerald-800 px-5 py-3 text-white " +
    "hover:bg-emerald-900 focus-visible:ring-emerald-800 " +
    "focus-visible:ring-offset-2",

  overlay:
    "rounded-full border border-white/40 bg-black/30 text-white " +
    "backdrop-blur-sm hover:bg-black/50 focus-visible:ring-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-4 text-sm",
  icon: "size-11 p-0",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
      {...buttonProps}
    >
      {children}
    </button>
  );
}