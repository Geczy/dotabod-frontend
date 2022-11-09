"use client"
import { Card } from "@/ui/card"
import { cn } from "@/lib/utils"
import { Code } from "@mantine/core"
import Image from "next/image"

const sceneNames = [
  "[dotabod] blocking minimap",
  "[dotabod] blocking picks",
  "[dotabod] game disconnected",
]

export function SceneSwitcher(): JSX.Element {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Automatic Scene Switcher</Card.Title>
        <Card.Description className="space-y-2">
          Will auto switch scenes in OBS depending on game state.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <ul className="list-decimal ml-4">
          <li>
            Must set browser properties to <span className="italics">Advanced access to OBS</span>
          </li>
          <li>Must create the following scenes (case sensitive)</li>
          <ul className="list-disc ml-4">
            {sceneNames.map((sceneName) => (
              <li key={sceneName}>
                <Code>{sceneName}</Code>
              </li>
            ))}
          </ul>
          <li>
            The dotabod browser source must at least be present in the scenes labeled
            &quot;blocking&quot;. That&apos;s so the blocker can appear.
          </li>
        </ul>

        <Image alt="scene switcher" width={736} height={315} src="/images/scene-switcher.png" />
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
