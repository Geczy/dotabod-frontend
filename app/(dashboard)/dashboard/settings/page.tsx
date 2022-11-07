import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { UserNameForm } from '@/components/user-name-form'
import { Suspense } from 'react'

const shimmer = `relative overflow-hidden rounded-xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`

export function PricingSkeleton() {
  return <div className={`h-[161px] space-y-4 rounded-lg bg-gray-800 ${shimmer}`}></div>
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Manage account and website settings." />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user?.id, name: user?.name }} />
      </div>
    </DashboardShell>
  )
}
