"use client";

import Link from "next/link";

export default function DashboardPage() {
  // Placeholder data — will come from the API later
  const stats = [
    { label: "Documents", value: "0", href: "/dashboard/documents" },
    { label: "Active Cases", value: "0", href: "/dashboard/cases" },
    { label: "Letters Generated", value: "0", href: "/dashboard/cases" },
  ];

  const recentDocuments: {
    id: string;
    name: string;
    date: string;
    status: string;
  }[] = [];

  const activeCases: {
    id: string;
    title: string;
    category: string;
    status: string;
    updatedAt: string;
  }[] = [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Welcome */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Welcome to AdvocateAI. Here&apos;s your overview.
          </p>
        </div>
        <Link
          href="/dashboard/documents/upload"
          className="mt-4 sm:mt-0 inline-flex items-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors"
        >
          + Upload Document
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-2xl border border-[var(--border)] p-6 transition-all hover:shadow-md hover:border-[var(--primary-light)]"
          >
            <p className="text-sm text-[var(--muted)]">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold">{stat.value}</p>
          </Link>
        ))}
      </div>

      {/* Recent Documents */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Documents</h2>
          <Link
            href="/dashboard/documents"
            className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            View all →
          </Link>
        </div>
        {recentDocuments.length === 0 ? (
          <div className="rounded-2xl border border-[var(--border)] p-8 text-center">
            <div className="text-4xl mb-3">📄</div>
            <p className="text-[var(--muted)]">
              No documents yet.{" "}
              <Link
                href="/dashboard/documents/upload"
                className="text-[var(--primary)] hover:underline font-medium"
              >
                Upload your first document
              </Link>
              {" "}to get started.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-[var(--border)] overflow-hidden">
            <table className="min-w-full divide-y divide-[var(--border)]">
              <thead className="bg-[var(--border)]/30">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {recentDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-[var(--border)]/20">
                    <td className="px-6 py-4 text-sm font-medium">
                      {doc.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--muted)]">
                      {doc.date}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]">
                        {doc.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Active Cases */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Active Cases</h2>
          <Link
            href="/dashboard/cases"
            className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            View all →
          </Link>
        </div>
        {activeCases.length === 0 ? (
          <div className="rounded-2xl border border-[var(--border)] p-8 text-center">
            <div className="text-4xl mb-3">⚖️</div>
            <p className="text-[var(--muted)]">
              No active cases. Upload a document and start a case to track your disputes.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {activeCases.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl border border-[var(--border)] p-6"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{c.title}</h3>
                  <span className="inline-flex rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]">
                    {c.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--muted)]">{c.category}</p>
                <p className="mt-4 text-xs text-[var(--muted)]">
                  Updated {c.updatedAt}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}