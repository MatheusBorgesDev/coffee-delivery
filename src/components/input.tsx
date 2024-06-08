import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`p-3 bg-zinc-200/50 rounded border border-zinc-300/50 placeholder:text-zinc-500/80 focus:outline-8 focus:outline-purple-400 ${className}`}
      {...props}
    />
  );
}
