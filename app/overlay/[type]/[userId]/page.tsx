"use client"

import io from "socket.io-client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

let socket
export default function OverlayPage({ params, searchParams }) {
  const [gameState, setGameState] = useState("")

  useEffect(() => {
    if (!params?.userId) return

    socket = io(process.env.NEXT_PUBLIC_GSI_WEBSOCKET_URL, {
      auth: { token: params?.userId },
    })

    socket.on("state", setGameState)
    socket.on("map:game_state", setGameState)

    socket.on("connect_error", (err) => {
      console.log(err.message)
    })
  }, [params?.userId])

  useEffect(() => {
    return () => {
      socket?.off("state")
      socket?.off("map:game_state")
      socket?.off("player:team_name")
      socket?.off("connect_error")
      socket?.disconnect()
    }
  }, [])

  const minimapStates = ["DOTA_GAMERULES_STATE_GAME_IN_PROGRESS", "DOTA_GAMERULES_STATE_PRE_GAME"]
  const isMinimapBlocked = minimapStates.includes(gameState) && params?.type === "minimap"

  const pickSates = ["DOTA_GAMERULES_STATE_HERO_SELECTION", "DOTA_GAMERULES_STATE_STRATEGY_TIME"]
  const isPicksBlocked = pickSates.includes(gameState) && params?.type === "picks"

  return (
    <div>
      {isMinimapBlocked && (
        <div className="absolute bottom-0 left-0">
          <Image
            alt="minimap blocker"
            width={244}
            height={244}
            src="/images/731-Complex-Large-AntiStreamSnipeMap.png"
          />
        </div>
      )}

      {isPicksBlocked && (
        <Image alt="picks blocker" width={3840} height={2160} src="/images/picker-overlay.png" />
      )}
    </div>
  )
}
