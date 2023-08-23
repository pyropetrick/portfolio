import { Email } from "@/components";
import { ContactFormType } from "@/utils/types";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json().then((body: ContactFormType) => body);
  await resend.emails.send({
    from: process.env.DOMAIN_EMAIL || "onboarding@resend.dev",
    to: process.env.MY_EMAIL || "pavel.chernenko97@gmail.com",
    subject: "Contact form",
    react: Email({ content: body.message, name: body.name, emailAddress: body.email }),
  });

  return NextResponse.json({ message: "success", success: true });
}
