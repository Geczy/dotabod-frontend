import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { SceneSwitcher } from "./SceneSwitcher"
import { MinimapCard } from "./MinimapCard"
import { PicksCard } from "./PicksCard"

export default async function FeaturesPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Features"
        text="Manage popular streamer features for your Dota game."
      />
      <div className="grid gap-10 mb-11">
        {/* <UserNameForm user={{ id: user?.id, name: user?.name }} /> */}
        <SceneSwitcher />
        <MinimapCard />
        <PicksCard />
      </div>
    </DashboardShell>
  )
}
