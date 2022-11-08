"use client"

import { Card } from "@/ui/card"
import { cn, getBaseUrl } from "@/lib/utils"
import { CopyButton, Tooltip } from "@mantine/core"
import { IconCopy, IconCheck } from "@tabler/icons"
import Image from "next/image"
import { useSession } from "next-auth/react"

export default function OverlayCopies({ user }) {
  return (
    <div className="space-y-12 mb-11">
      <MinimapCard user={user} />
      <PicksCard user={user} />
    </div>
  )
}

function MinimapCard({ user }) {
  const copyURL = getBaseUrl(`overlay/minimap/${user?.id}`)

  return (
    <Card>
      <Card.Header>
        <Card.Title>Minimap</Card.Title>
        <Card.Description>
          Block your minimap to deter people from destroying your wards or observing teammate
          positions. This overlay will make it confusing to see where the true wards are.
          <Image
            alt="minimap blocker"
            width={244}
            height={244}
            src="/images/731-Complex-Large-AntiStreamSnipeMap.png"
          />
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
              position="bottom"
            >
              <button
                onClick={copy}
                className={cn(
                  "relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-normal text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
                )}
              >
                {copyURL}
              </button>
            </Tooltip>
          )}
        </CopyButton>
      </Card.Footer>
    </Card>
  )
}

function PicksCard({ user }) {
  const copyURL = getBaseUrl(`overlay/picks/${user?.id}`)

  return (
    <Card>
      <Card.Header>
        <Card.Title>Picks</Card.Title>
        <Card.Description>
          Block your picks to deter people from banning your heros or countering your picks.
          <Image alt="picks blocker" width={1920} height={1080} src="/images/picker-overlay.png" />
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
              position="bottom"
            >
              <button
                onClick={copy}
                className={cn(
                  "relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-normal text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
                )}
              >
                {copyURL}
              </button>
            </Tooltip>
          )}
        </CopyButton>
      </Card.Footer>
    </Card>
  )
}
