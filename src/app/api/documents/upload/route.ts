import { NextRequest, NextResponse } from "next/server";

// In-memory document store (will be replaced with SQLite via team-db later)
const documents: {
  id: string;
  name: string;
  size: number;
  type: string;
  status: "pending" | "processing" | "completed" | "error";
  uploadedAt: string;
}[] = [];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const caseName = formData.get("caseName") as string | null;
    const category = formData.get("category") as string | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file size (25MB max)
    const maxSize = 25 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size exceeds 25MB limit" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "text/plain",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "File type not supported. Please upload PDF, images, DOC, or TXT files." },
        { status: 400 }
      );
    }

    // Create document entry
    const document = {
      id: `doc_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: "pending" as const,
      uploadedAt: new Date().toISOString(),
    };

    documents.push(document);

    // TODO: Queue document for AI analysis
    // For now, mark as completed after a simulated delay
    setTimeout(() => {
      const doc = documents.find((d) => d.id === document.id);
      if (doc) doc.status = "completed";
    }, 2000);

    return NextResponse.json(
      {
        message: "Document uploaded successfully",
        document,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload document" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ documents });
}