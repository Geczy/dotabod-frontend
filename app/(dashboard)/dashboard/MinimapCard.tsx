"use client"
import { Card } from "@/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

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
