import { notFound } from "next/navigation"
import Link from "next/link"

import { getCurrentUser } from "@/lib/session"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserAccountNav } from "@/components/user-account-nav"
import Image from 'next/image'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <div className="mx-auto flex h-screen max-w-[1440px] flex-col space-y-6 overflow-hidden px-6">
      <header className="flex h-[64px] items-center justify-between pl-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/peepofat.gif"
            width={58}
            height={58}
            alt="peepofat"
            priority
            className="h-6 w-6"
          />
          <span className="text-lg font-bold">Dotabod</span>
        </Link>
        <UserAccountNav
          user={{
            name: user.name,
            image: user.image,
            email: user.email,
          }}
        />
      </header>
      <div className="grid grid-cols-[200px_1fr] gap-12">
        <aside className="flex w-[200px] flex-col">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  )
}
