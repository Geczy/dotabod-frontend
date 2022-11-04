import { Icons } from "@/components/icons"
import { UserAccountNav } from "@/components/user-account-nav";
import { getUser } from "app/(dashboard)/dashboard/layout";
import Link from "next/link";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getUser();

  return (
    <div className="mx-auto w-full px-4">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between py-4">
        <div className="flex gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo />
            <span className="font-bold">Dotabod</span>
          </Link>
          <nav>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </nav>
        </div>
        <div>
          {user ? (
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
              }}
            />
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
