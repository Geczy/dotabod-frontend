'use client'

import Link from 'next/link'
import io from 'socket.io-client'

import Image from 'next/image'
import { Icons } from '@/components/icons'
import { UserAuthForm } from '@/components/user-auth-form'
import { useEffect, useState } from 'react'

export function fmtMSS(s) {
  return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s
}

export default function LoginPage() {
  useEffect(() => {
    const socket = io('http://localhost:3000', { auth: { token: '123456' } })

    const handler = (msg: string) => {
      console.log('Game time: ' + fmtMSS(msg))
    }

    socket.on('map:clock_time', handler)

    socket.on('connect_error', (err) => {
      console.log(err.message) // prints the message associated with the error
    })

    return () => {
      socket.off('map:clock_time')
      socket.off('connect_error')
    }
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-8 left-8 inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent py-2 px-3  text-center text-sm font-medium text-slate-900 hover:border-slate-100 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white dark:focus:ring-slate-700"
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="p-8">
        <div className="mx-auto flex w-[350px] flex-col justify-center space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <Image
              src="/images/peepofat.gif"
              width={58}
              height={58}
              alt="peepofat"
              priority
              className="mx-auto"
            />
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm text-slate-500">Sign in to your account with Twitch</p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-slate-500">
            <Link href="/register" className="underline hover:text-brand">
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
