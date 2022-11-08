'use client'

import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function fmtMSS(s) {
  return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s
}

export default function OverlayPage({
  searchParams,
}: {
  searchParams: { id: string; minimap: boolean; picks: true }
}) {
  const [gameTime, setGameTime] = useState('Game time: 0:00')
  const [showMinimap, setShowMinimap] = useState(false)
  const [showPickerOverlay, setShowPickerOverlay] = useState(false)

  useEffect(() => {
    if (!searchParams?.id) return

    const socket = io('https://dotabod.lunars.dev/', { auth: { token: searchParams.id } })

    function handleMinimapOverlay(msg: string) {
      if (
        !showPickerOverlay &&
        (msg === 'DOTA_GAMERULES_STATE_HERO_SELECTION' ||
          msg === 'DOTA_GAMERULES_STATE_PRE_GAME' ||
          msg === 'DOTA_GAMERULES_STATE_STRATEGY_TIME')
      ) {
        setShowPickerOverlay(true)
      }

      if (
        showPickerOverlay &&
        msg !== 'DOTA_GAMERULES_STATE_HERO_SELECTION' &&
        msg !== 'DOTA_GAMERULES_STATE_PRE_GAME' &&
        msg !== 'DOTA_GAMERULES_STATE_STRATEGY_TIME'
      ) {
        setShowPickerOverlay(false)
      }

      if (!showMinimap && msg === 'DOTA_GAMERULES_STATE_GAME_IN_PROGRESS') {
        setShowMinimap(true)
      } else if (showMinimap && msg !== 'DOTA_GAMERULES_STATE_GAME_IN_PROGRESS') {
        setShowMinimap(false)
      }
    }

    socket.on('map:clock_time', (msg: string) => {
      // setGameTime('Game time: ' + fmtMSS(msg))
    })

    socket.on('state', (msg) => {
      handleMinimapOverlay(msg)
    })

    socket.on('map:game_state', (msg) => {
      console.log('Game state: ' + msg)

      handleMinimapOverlay(msg)
    })

    socket.on('connect_error', (err) => {
      console.log(err.message)
    })

    return () => {
      socket.off('state')
      socket.off('map:clock_time')
      socket.off('map:game_state')
      socket.off('connect_error')
    }
  }, [showMinimap, searchParams?.id, showPickerOverlay])

  return (
    <div>
      {showMinimap && searchParams.minimap ? (
        <Image alt="minimap blocker" width={280} height={279} src="/images/minimap_full.png" />
      ) : null}
      {showPickerOverlay && searchParams.picks ? (
        <Image alt="minimap blocker" width={3840} height={2160} src="/images/picker-overlay.png" />
      ) : null}
    </div>
  )
}
