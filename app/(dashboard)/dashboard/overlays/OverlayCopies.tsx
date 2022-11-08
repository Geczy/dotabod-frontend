"use client"

import { Card } from "@/ui/card"
import { cn, getBaseUrl } from "@/lib/utils"
import { useClipboard } from "@mantine/hooks"
import { CopyButton, ActionIcon, Tooltip } from "@mantine/core"
import { IconCopy, IconCheck } from "@tabler/icons"

export default function OverlayCopies() {
  const clipboard = useClipboard({ timeout: 500 })
  const picksURL = getBaseUrl("overlay/picks/cla3ak0ys0000uw106flq7gop")

  return (
    <Card>
      <Card.Header>
        <Card.Title>Your Name</Card.Title>
        <Card.Description>
          Please enter your full name or a display name you are comfortable with.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="grid gap-1">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
        </div>
      </Card.Content>
      <Card.Footer>
        <CopyButton value={picksURL} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip
              label={
                <span className="flex items-center space-x-2">
                  {copied ? (
                    <>
                      <IconCheck size={16} /> <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <IconCopy size={16} /> <span>Copy</span>
                    </>
                  )}
                </span>
              }
              withArrow
              position="right"
            >
              <button
                onClick={copy}
                className={cn(
                  "relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
                )}
              >
                {picksURL}
              </button>
            </Tooltip>
          )}
        </CopyButton>
      </Card.Footer>
    </Card>
  )
}
