"use client"

import { Card } from "@/ui/card"
import { cn, getBaseUrl } from "@/lib/utils"
import { CopyButton, Tooltip } from "@mantine/core"
import { IconCopy, IconCheck } from "@tabler/icons"
import Image from "next/image"
import { Code } from "@mantine/core"

export default function OverlayCopies({ user }) {
  return (
    <div className="space-y-12 mb-11">
      <OverlayURL user={user} />
      <SceneSwitcher user={user} />
      <MinimapCard />
      <PicksCard />
    </div>
  )
}

function MinimapCard() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Minimap</Card.Title>
        <Card.Description>
          Block your minimap to deter people from destroying your wards or observing teammate
          positions. This overlay will make it confusing to see where the true wards are.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Image
          alt="minimap blocker"
          width={244}
          height={244}
          src="/images/731-Complex-Large-AntiStreamSnipeMap.png"
        />
      </Card.Content>
      <Card.Footer>
        <button
          disabled
          className={cn(
            "relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-normal text-white hover:bg-brand-400 disabled:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
          )}
        >
          Disable
        </button>
      </Card.Footer>
    </Card>
  )
}

function SceneSwitcher({ user }) {
  const copyURL = getBaseUrl(`overlay/${user?.id}`)

  return (
    <Card>
      <Card.Header>
        <Card.Title>Automatic Scene Switcher</Card.Title>
        <Card.Description className="space-y-2">
          <div>
            Will attempt to switch scenes in OBS. Must set browser properties to{" "}
            <span className="italics">Advanced access to OBS</span>
          </div>
          <div>
            Must have two scenes titled <Code>[dotabod] playing</Code> and{" "}
            <Code>[dotabod] disconnected</Code>
          </div>
          <div>The dotabod browser source must be present in both scenes.</div>
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Image alt="scene switcher" width={1227} height={314} src="/images/scene-switcher.png" />
      </Card.Content>
      <Card.Footer>
        <button
          disabled
          className={cn(
            "relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-normal text-white hover:bg-brand-400 disabled:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
          )}
        >
          Disable
        </button>
      </Card.Footer>
    </Card>
  )
}

function PicksCard() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Picks</Card.Title>
        <Card.Description>
          Block your picks to deter people from banning your heros or countering your picks.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Image
          alt="picks blocker"
          width={1920}
          height={1080}
          src="/images/block-radiant-picks.png"
        />
      </Card.Content>
      <Card.Footer>
        <button
          disabled
          className={cn(
            "relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-normal text-white hover:bg-brand-400 disabled:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
          )}
        >
          Disable
        </button>
      </Card.Footer>
    </Card>
  )
}

function OverlayURL({ user }) {
  const copyURL = getBaseUrl(`overlay/${user?.id}`)

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
