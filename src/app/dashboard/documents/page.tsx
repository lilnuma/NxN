"use client";

import Link from "next/link";

export default function DocumentsPage() {
  const documents: {
    id: string;
    name: string;
    date: string;
    status: string;
    size: string;
  }[] = [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            All your uploaded documents in one place.
          </p>
        </div>
        <Link
          href="/dashboard/documents/upload"
          className="mt-4 sm:mt-0 inline-flex items-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors"
        >
          + Upload New
        </Link>
      </div>

      {documents.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-[var(--border)] p-12 text-center">
          <div className="text-5xl mb-4">📄</div>
          <h2 className="text-xl font-semibold">No documents yet</h2>
          <p className="mt-2 text-sm text-[var(--muted)] max-w-md mx-auto">
            Upload a notice, contract, bill, or letter to get started. Our AI
            will analyze it and help you take action.
          </p>
          <Link
            href="/dashboard/documents/upload"
            className="mt-6 inline-flex items-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors"
          >
            Upload Your First Document
          </Link>
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-[var(--border)] overflow-hidden">
          <table className="min-w-full divide-y divide-[var(--border)]">
            <thead className="bg-[var(--border)]/30">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-[var(--border)]/20">
                  <td className="px-6 py-4 text-sm font-medium">{doc.name}</td>
                  <td className="px-6 py-4 text-sm text-[var(--muted)]">
                    {doc.size}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--muted)]">
                    {doc.date}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]">
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-right">
                    <button className="text-[var(--primary)] hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}