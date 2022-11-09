"use client"
import { Card } from "@/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { DisableButton } from "@/components/DisableButton"

export function MinimapCard(): JSX.Element {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Minimap</Card.Title>
        <Card.Description>
          Block your minimap to deter people from destroying your wards or observing teammate
          positions. This overlay will make it confusing to see where the true wards are.
        </Card.Description>
      </Card.Header>
      <Card.Content className="flex items-center space-x-6">
        <Image
          alt="minimap blocker"
          width={244}
          height={244}
          src="/images/731-Simple-Large-AntiStreamSnipeMap.png"
        />
        {/* <Image
          alt="minimap blocker"
          width={244}
          height={244}
          src="/images/731-Complex-Large-AntiStreamSnipeMap.png"
        /> */}
      </Card.Content>
      <Card.Footer>
        <DisableButton />
      </Card.Footer>
    </Card>
  )
}
