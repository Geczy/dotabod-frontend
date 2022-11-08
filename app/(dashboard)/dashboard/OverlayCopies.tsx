"use client"

import { MinimapCard } from "./MinimapCard"
import { SceneSwitcher } from "./SceneSwitcher"
import { PicksCard } from "./PicksCard"
import { OverlayURL } from "./OverlayURL"

export default function OverlayCopies({ user }) {
  return (
    <div className="space-y-12 mb-11">
      <OverlayURL user={user} />
      <SceneSwitcher />
      <MinimapCard />
      <PicksCard />
    </div>
  )
}
