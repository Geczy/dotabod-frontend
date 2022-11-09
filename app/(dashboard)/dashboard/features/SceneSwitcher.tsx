"use client"
import { Card } from "@/ui/card"
import { Code } from "@mantine/core"
import { DisableButton } from "@/components/DisableButton"
import { Display, Image, Snippet } from "@geist-ui/core"

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
        <ul className="list-decimal ml-4 text-sm text-gray-700 space-y-2 mb-2">
          <li>
            Must set browser properties to <span className="italics">Advanced access to OBS</span>
          </li>
          <li>Must create the following scenes (case sensitive)</li>
          <ul className="list-none ml-4 space-y-2">
            {sceneNames.map((sceneName) => (
              <li key={sceneName}>
                <Snippet symbol="" width="250px">
                  {sceneName}
                </Snippet>
              </li>
            ))}
          </ul>
          <li>
            The dotabod browser source must at least be present in the scenes labeled
            &quot;blocking&quot;. That&apos;s so the blocker can appear.
          </li>
        </ul>

        <Display shadow caption="Example OBS scenes and sources">
          <Image height="246px" alt="scene switcher" src="/images/scene-switcher.png" />
        </Display>
      </Card.Content>
      <Card.Footer>
        <DisableButton />
      </Card.Footer>
    </Card>
  )
}
