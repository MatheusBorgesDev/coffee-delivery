import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`px-5 py-4 w-full bg-zinc-200 text-sm uppercase rounded hover:bg-purple-300/50 transition border-2 border-transparent focus-within:bg-purple-300/50 focus-within:border-purple-400
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
