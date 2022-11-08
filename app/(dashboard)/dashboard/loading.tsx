import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PostCreateButton } from "@/components/post-create-button"
import { PostItem } from "@/components/post-item"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="General" text="Random items for your stream." />
      <div className="divide-y divide-neutral-200 rounded-md border border-slate-200">
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
      </div>
    </DashboardShell>
  )
}
