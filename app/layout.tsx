import "styles/globals.css"

import { Toaster } from "@/ui/toast"
import { Analytics } from "@/components/analytics"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="text-slate-900 antialiased">
      <head />
      <body className="min-h-screen">
        {children}
        <Analytics />
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
