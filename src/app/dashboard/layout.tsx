"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Documents", href: "/dashboard/documents" },
  { name: "Cases", href: "/dashboard/cases" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Not authenticated");
      })
      .then((data) => setUser(data.user))
      .catch(() => {
        router.push("/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  const handleSignOut = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="flex min-h-full items-center justify-center">
        <div className="animate-pulse text-[var(--muted)]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-white text-sm font-bold">
                A
              </div>
              <span className="text-lg font-bold tracking-tight">
                Advocate<span className="text-[var(--primary)]">AI</span>
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href ||
                      pathname.startsWith(item.href + "/")
                      ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--border)]/50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Home
            </Link>
            {user && (
              <div className="flex items-center gap-3">
                <span className="hidden sm:block text-sm text-[var(--muted)]">
                  {user.name}
                </span>
                <button
                  onClick={handleSignOut}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  Sign out
                </button>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 text-sm font-semibold text-[var(--primary)]">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className="sm:hidden flex border-b border-[var(--border)] bg-[var(--background)] px-4">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex-1 px-3 py-3 text-center text-sm font-medium transition-colors border-b-2",
              pathname === item.href || pathname.startsWith(item.href + "/")
                ? "border-[var(--primary)] text-[var(--primary)]"
                : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}