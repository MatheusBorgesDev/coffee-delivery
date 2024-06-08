import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`px-3 py-2 bg-zinc-200/30 rounded border border-zinc-300/50 placeholder:text-zinc-500/80 focus:outline focus:outline-purple-600 ${className}`}
      {...props}
    />
  );
}
