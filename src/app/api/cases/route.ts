import { NextRequest, NextResponse } from "next/server";

const cases: {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "open" | "in-progress" | "resolved" | "closed";
  createdAt: string;
  updatedAt: string;
  documentCount: number;
}[] = [];

export async function GET() {
  return NextResponse.json({ cases });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, category, documentIds } = body;

    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const newCase = {
      id: `case_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      title,
      description: description || "",
      category: category || "other",
      status: "open" as const,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      documentCount: documentIds?.length || 0,
    };

    cases.push(newCase);

    return NextResponse.json(
      { message: "Case created successfully", case: newCase },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create case error:", error);
    return NextResponse.json(
      { error: "Failed to create case" },
      { status: 500 }
    );
  }
}