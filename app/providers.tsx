"use client"

import { GeistProvider, CssBaseline } from "@geist-ui/core"
import { MantineProvider } from "@mantine/core"

export function Providers({ children }) {
  return (
    <MantineProvider>
      <GeistProvider>{children}</GeistProvider>
    </MantineProvider>
  )
}
