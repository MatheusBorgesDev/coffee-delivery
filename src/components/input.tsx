import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | FieldError;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    const isError = !!error;
    const errorMessage = typeof error === "string" ? error : error?.message;

    return (
      <div className="flex flex-col">
        <input
          ref={ref}
          className={`px-3 py-2 bg-zinc-200/30 rounded border ${
            isError ? "border-red-500" : "border-zinc-300/50"
          } placeholder:text-zinc-500/80 focus:outline focus:outline-purple-600 ${className}`}
          {...props}
        />
        {isError && (
          <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
        )}
      </div>
    );
  }
);

export { Input };
