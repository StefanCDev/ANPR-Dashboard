import { ReactNode } from "react"

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {children}
    </div>
  )
}

export function CardHeader({ children }: CardProps) {
  return (
    <div className="mb-4">
      {children}
    </div>
  )
}

export function CardContent({ children }: CardProps) {
  return (
    <div className="text-gray-700">
      {children}
    </div>
  )
}

export function CardTitle({ children }: CardProps) {
  return (
    <h2 className="text-xl font-semibold">
      {children}
    </h2>
  )
}
