"use client"

import { cn } from "@/lib/utils"
import { Tooltip } from "@mantine/core"

export const DisableButton = () => (
  <Tooltip
    multiline
    width={220}
    label="Oops! Can't turn off right now. This feature is always on for the beta. Expect to be able to turn this off soon!"
    withArrow
    position="right"
  >
    <button className="relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-normal text-white hover:bg-brand-400 disabled:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2">
      Turn off
    </button>
  </Tooltip>
)
