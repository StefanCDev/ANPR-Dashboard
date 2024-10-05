import { SelectHTMLAttributes } from "react"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ children, className, ...props }: SelectProps) {
  return (
    <select className={`border border-gray-300 rounded-md p-2 w-full ${className}`} {...props}>
      {children}
    </select>
  )
}
