import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email =
    typeof (body as Record<string, unknown>).email === "string"
      ? ((body as Record<string, unknown>).email as string).trim().toLowerCase()
      : null;

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const source =
    typeof (body as Record<string, unknown>).source === "string"
      ? (body as Record<string, unknown>).source
      : "landing";

  const supabase = getSupabase();

  const { error } = await supabase
    .from("beta_signups")
    .insert({ email, source, created_at: new Date().toISOString() });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "This email is already on the list." },
        { status: 409 }
      );
    }
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
