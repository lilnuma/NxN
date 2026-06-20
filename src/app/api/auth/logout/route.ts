import { NextRequest, NextResponse } from "next/server";
import { getUserFromCookies, deleteSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get("cookie");
    const result = getUserFromCookies(cookieHeader);

    if (result) {
      deleteSession(result.token);
    }

    const response = NextResponse.json({ message: "Signed out successfully" });

    response.cookies.set("advocateai_session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Failed to sign out" },
      { status: 500 }
    );
  }
}