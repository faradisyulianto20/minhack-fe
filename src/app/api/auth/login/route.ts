import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://financial-crisis-mini-hackathon-gdg.vercel.app";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { message: "Tidak dapat terhubung ke server" },
      { status: 500 },
    );
  }
}
