import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function Button({
  className,
  children,
  selected,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`p-4 w-full flex items-center gap-3 rounded-md text-xs uppercase transition border ${
        selected
          ? "bg-purple-200/50 border-purple-600 text-purple-600"
          : "bg-zinc-200 text-zinc-600 border-transparent hover:bg-purple-200/50"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
