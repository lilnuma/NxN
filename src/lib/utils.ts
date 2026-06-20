/**
 * Utility functions for AdvocateAI
 */

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

export type DocumentStatus = "pending" | "processing" | "completed" | "error";
export type CaseStatus = "open" | "in-progress" | "resolved" | "closed";

export interface Document {
  id: string;
  name: string;
  size: number;
  type: string;
  status: DocumentStatus;
  summary?: string;
  uploadedAt: string;
  caseId?: string;
}

export interface Case {
  id: string;
  title: string;
  description: string;
  status: CaseStatus;
  category: string;
  createdAt: string;
  updatedAt: string;
  documentCount: number;
}
