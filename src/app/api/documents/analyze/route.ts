import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { documentId } = body;

    if (!documentId) {
      return NextResponse.json(
        { error: "documentId is required" },
        { status: 400 }
      );
    }

    // TODO: Integrate with AI analysis pipeline
    // This will be handled by the AI Integration Engineer

    // Placeholder analysis result
    const analysis = {
      documentId,
      status: "completed",
      summary:
        "This document appears to be a billing notice from a utility company. Key points include: an outstanding balance of $245.30 due by June 30, 2024, a late payment warning, and contact information for disputing the charge.",
      keyDates: ["June 30, 2024 - Payment due date", "July 15, 2024 - Late fee applies"],
      keyTerms: [
        {
          term: "Outstanding Balance",
          explanation:
            "The total amount of money you still owe, including any previous unpaid amounts.",
        },
        {
          term: "Late Payment Penalty",
          explanation:
            "An additional fee charged when payment is not received by the due date.",
        },
      ],
      suggestedActions: [
        "Review the billing period and verify the meter reading matches your records",
        "Call customer service at (555) 123-4567 to discuss the charge",
        "Prepare a written dispute if you believe the bill is incorrect",
      ],
    };

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      { error: "Failed to analyze document" },
      { status: 500 }
    );
  }
}