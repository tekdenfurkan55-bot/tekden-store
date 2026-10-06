import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "PayTR merchant bilgileri henüz yapılandırılmadı." }, { status: 503 });
}
