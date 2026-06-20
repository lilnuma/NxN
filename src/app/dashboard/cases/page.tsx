"use client";

import Link from "next/link";

export default function CasesPage() {
  const cases: {
    id: string;
    title: string;
    category: string;
    status: string;
    documents: number;
    updatedAt: string;
  }[] = [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Cases</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Track your disputes and follow their progress.
          </p>
        </div>
        <Link
          href="/dashboard/documents/upload"
          className="mt-4 sm:mt-0 inline-flex items-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors"
        >
          + New Case
        </Link>
      </div>

      {cases.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-[var(--border)] p-12 text-center">
          <div className="text-5xl mb-4">⚖️</div>
          <h2 className="text-xl font-semibold">No cases yet</h2>
          <p className="mt-2 text-sm text-[var(--muted)] max-w-md mx-auto">
            Upload a document and create a case to start tracking your dispute
            from start to resolution.
          </p>
          <Link
            href="/dashboard/documents/upload"
            className="mt-6 inline-flex items-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors"
          >
            Start a Case
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl border border-[var(--border)] p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">{c.title}</h3>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    c.status === "open"
                      ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                      : c.status === "in-progress"
                      ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                      : c.status === "resolved"
                      ? "bg-[var(--success)]/10 text-[var(--success)]"
                      : "bg-[var(--muted)]/10 text-[var(--muted)]"
                  }`}
                >
                  {c.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">{c.category}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
                <span>{c.documents} document{c.documents !== 1 ? "s" : ""}</span>
                <span>Updated {c.updatedAt}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}