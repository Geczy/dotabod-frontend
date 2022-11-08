import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import OverlayCopies from "./OverlayCopies"

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Overlays" text="Browser overlays for your OBS." />
      <div className="grid gap-10">
        <OverlayCopies user={user} />
      </div>
    </DashboardShell>
  )
}
