import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`p-4 w-full flex items-center gap-3 bg-zinc-200 text-xs uppercase rounded-md hover:bg-purple-200/50 transition border border-transparent focus-within:bg-purple-200/50 focus-within:border-purple-600
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
