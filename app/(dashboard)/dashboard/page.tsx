import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ExportCFG } from "./ExportCFG"
import { OverlayURL } from "./OverlayURL"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Setup" text="Browser overlays for your OBS." />
      <div className="grid gap-10 mb-11">
        <div className="space-y-12">
          <ExportCFG user={user} />
          <OverlayURL user={user} />
        </div>
      </div>
    </DashboardShell>
  )
}
