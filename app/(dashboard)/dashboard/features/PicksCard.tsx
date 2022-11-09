"use client"
import { Card } from "@/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { DisableButton } from "@/components/DisableButton"

export function PicksCard() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Picks</Card.Title>
        <Card.Description>
          Block your picks to deter people from banning your heros or countering your picks. Radiant
          blocker shown below as an example. The bot will pick the right overlay depending on which
          team you end up on.
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
        <DisableButton />
      </Card.Footer>
    </Card>
  )
}
