"use client"
import { Card } from "@/ui/card"
import { cn } from "@/lib/utils"
import { CopyButton, Tooltip } from "@mantine/core"
import { IconCopy, IconCheck } from "@tabler/icons"
import Image from "next/image"
import { useBaseUrl } from "@/lib/hooks"

export function OverlayURL({ user }) {
  const copyURL = useBaseUrl(`overlay/${user?.id}`)

  return (
    <Card>
      <Card.Header>
        <Card.Title>OBS Overlay</Card.Title>
        <Card.Description>
          Copy the below settings to your browser source in OBS. Change the URL to the one below.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <CopyButton value={copyURL} timeout={2000}>
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
                  "relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-normal text-white hover:bg-brand-400 disabled:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
                )}
              >
                {copyURL}
              </button>
            </Tooltip>
          )}
        </CopyButton>

        <Image
          className="mt-6 max-h-96 w-auto"
          alt="obs overlay"
          width={949}
          height={633}
          src="/images/dotabod-obs-config.png"
        />
      </Card.Content>
    </Card>
  )
}
