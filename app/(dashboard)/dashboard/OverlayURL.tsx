"use client"
import { Card } from "@/ui/card"
import { cn } from "@/lib/utils"
import { CopyButton, Tooltip } from "@mantine/core"
import { IconCopy, IconCheck } from "@tabler/icons"
import { useBaseUrl } from "@/lib/hooks"
import { Display, Image, Snippet } from "@geist-ui/core"

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
        <Snippet symbol="" width="500px" text={copyURL}>
          {copyURL}
        </Snippet>

        <Display shadow caption="Dotabod browser source properties in OBS">
          <Image
            alt="dotabod browser source properties"
            height="433px"
            src="/images/dotabod-obs-config.png"
          />
        </Display>
      </Card.Content>
    </Card>
  )
}
