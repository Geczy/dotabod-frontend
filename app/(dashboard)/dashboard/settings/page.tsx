import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { UserNameForm } from "@/components/user-name-form"
import { SceneSwitcher } from "./SceneSwitcher"
import { MinimapCard } from "./MinimapCard"
import { PicksCard } from "./PicksCard"

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Manage account and website settings." />
      <div className="grid gap-10 mb-11">
        {/* <UserNameForm user={{ id: user?.id, name: user?.name }} /> */}
        <SceneSwitcher />
        <MinimapCard />
        <PicksCard />
      </div>
    </DashboardShell>
  )
}
