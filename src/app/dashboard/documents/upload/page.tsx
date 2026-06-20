"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function UploadDocumentPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [caseName, setCaseName] = useState("");
  const [category, setCategory] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will connect to API later
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          href="/dashboard/documents"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          ← Back to Documents
        </Link>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">
          Upload Document
        </h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Upload a notice, contract, bill, or letter. We support PDF, images, and text files.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* File Upload Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition-colors ${
            isDragging
              ? "border-[var(--primary)] bg-[var(--primary)]/5"
              : "border-[var(--border)] hover:border-[var(--primary-light)] hover:bg-[var(--border)]/20"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.gif,.webp,.txt,.doc,.docx"
            onChange={handleFileSelect}
            className="hidden"
          />
          {file ? (
            <div>
              <div className="text-5xl mb-4">📎</div>
              <p className="text-lg font-semibold">{file.name}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {(file.size / 1024 / 1024).toFixed(1)} MB
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                }}
                className="mt-3 text-sm text-[var(--error)] hover:underline"
              >
                Remove
              </button>
            </div>
          ) : (
            <div>
              <div className="text-5xl mb-4">📄</div>
              <p className="text-lg font-semibold">
                Drop your document here, or click to browse
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                PDF, JPG, PNG, DOC, TXT — up to 25MB
              </p>
            </div>
          )}
        </div>

        {/* Case Details */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="caseName"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              Case name (optional)
            </label>
            <input
              id="caseName"
              type="text"
              value={caseName}
              onChange={(e) => setCaseName(e.target.value)}
              className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              placeholder="e.g., Utility Bill Dispute"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            >
              <option value="">Select a category...</option>
              <option value="utility">Utility Bill</option>
              <option value="parking">Parking Ticket</option>
              <option value="rental">Rental / Lease</option>
              <option value="insurance">Insurance Claim</option>
              <option value="medical">Medical Bill</option>
              <option value="government">Government Benefits</option>
              <option value="consumer">Consumer Complaint</option>
              <option value="contract">Contract Review</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!file}
          className="w-full rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Upload & Analyze Document
        </button>
      </form>
    </div>
  );
}