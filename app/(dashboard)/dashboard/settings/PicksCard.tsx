"use client"
import { Card } from "@/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

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
