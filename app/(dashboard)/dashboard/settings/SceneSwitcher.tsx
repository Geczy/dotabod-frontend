"use client"
import { Card } from "@/ui/card"
import { cn } from "@/lib/utils"
import { Code } from "@mantine/core"
import Image from "next/image"

export function SceneSwitcher(): JSX.Element {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Automatic Scene Switcher</Card.Title>
        <Card.Description className="space-y-2">
          Will attempt to auto switch scenes in OBS.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <p>
          Must set browser properties to <span className="italics">Advanced access to OBS</span>
        </p>
        <p>
          Must have two scenes titled <Code>[dotabod] playing</Code> and{" "}
          <Code>[dotabod] disconnected</Code>
        </p>
        <p>The dotabod browser source must be present in both scenes.</p>

        <Image
          alt="scene switcher"
          className="max-h-52 w-auto mt-6"
          width={1227}
          height={314}
          src="/images/scene-switcher.png"
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
