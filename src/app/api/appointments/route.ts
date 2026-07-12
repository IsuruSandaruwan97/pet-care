import { NextRequest, NextResponse } from "next/server";

const requiredFields = ["ownerName", "phone", "email", "petName", "reason"];

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());

  const missingFields = requiredFields.filter((field) => !payload[field]);

  if (missingFields.length > 0) {
    return NextResponse.json(
      { message: "Missing required fields", missingFields },
      { status: 400 },
    );
  }

  if (process.env.APPOINTMENT_WEBHOOK_URL) {
    const response = await fetch(process.env.APPOINTMENT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Unable to forward appointment request" },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({
    message: "Appointment request received",
    mode: process.env.APPOINTMENT_WEBHOOK_URL ? "webhook" : "demo",
  });
}
