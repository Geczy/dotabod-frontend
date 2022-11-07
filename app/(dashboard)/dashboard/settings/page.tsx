import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { UserNameForm } from "@/components/user-name-form"
import { useSession } from "next-auth/react";

export default async function SettingsPage() {
  const user = await getCurrentUser()

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: session.user.id, name: session.user.name }} />
      </div>
    </DashboardShell>
  );
}
