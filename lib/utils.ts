import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const getBaseUrl = (append?: string) => {
  const isProduction = process.env.NODE_ENV === "production"
  const vercelPublicDomain = process.env.NEXT_PUBLIC_DOMAIN
  const prodURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  const base = vercelPublicDomain || (isProduction ? prodURL : "http://localhost:3001/")

  return append ? `${base}${append}` : base
}
