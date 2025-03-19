import { forwardRef } from "react"

const Input = forwardRef(
  ({ type = "text", label, error, className = "", containerClassName = "", id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`

    return (
      <div className={`space-y-2 ${containerClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          ref={ref}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "border-red-500 focus-visible:ring-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

Input.displayName = "Input"

export default Input

