"use client"

import { Card } from "@/ui/card"
import { Button, Link, Snippet } from "@geist-ui/core"
import { Code } from "@mantine/core"

export function ExportCFG({ user }) {
  const fileData = `"Dotabod Configuration"
{
  "uri" "https://dotabod.lunars.dev/gsi"
  "timeout" "5.0"
  "buffer" "0.1"
  "throttle" "0.1"
  "heartbeat" "10.0"
  "data"
  {
    "buildings" "1"
    "provider" "1"
    "map" "1"
    "player" "1"
    "hero" "1"
    "abilities" "1"
    "items" "1"
    "draft" "1"
    "wearables" "0"
  }
  "auth"
  {
    "token" "${user.id}"
  }
}
`
  const blob = new Blob([fileData], { type: "text/plain" })
  const url = URL.createObjectURL(blob)

  return (
    <Card>
      <Card.Header>
        <Card.Title>Dota GSI File</Card.Title>
        <Card.Description>This enables Dotabod to see your games.</Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="space-y-2">
          <div>Restart your Dota 2 client after saving the file.</div>

          <Snippet symbol="" width="750px">
            C:\Program Files (x86)\Steam\steamapps\common\dota 2
            beta\game\dota\cfg\gamestate_integration\
          </Snippet>
        </div>
      </Card.Content>
      <Card.Footer>
        <Link href={url} download={`gamestate_integration_dotabod-${user.name}.cfg`}>
          <Button type="secondary" className="!normal-case">
            Download gamestate_integration.cfg
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  )
}
