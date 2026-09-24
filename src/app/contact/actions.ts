"use server";

import { site } from "@/lib/site";

export type TourFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
};

type Field = "parentName" | "email" | "phone" | "childAge" | "program" | "preferredTimes" | "message";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: FormDataEntryValue | null, max = 500) {
  return (typeof v === "string" ? v : "").trim().slice(0, max);
}

export async function submitTourRequest(_prev: TourFormState, formData: FormData): Promise<TourFormState> {
  // Honeypot — bots fill every field; humans never see this one.
  if (clean(formData.get("website"))) {
    return { status: "success", message: "Thank you! We'll be in touch shortly." };
  }

  const data = {
    parentName: clean(formData.get("parentName"), 120),
    email: clean(formData.get("email"), 200),
    phone: clean(formData.get("phone"), 40),
    childAge: clean(formData.get("childAge"), 60),
    program: clean(formData.get("program"), 60),
    preferredTimes: clean(formData.get("preferredTimes"), 200),
    message: clean(formData.get("message"), 2000),
  };

  const errors: TourFormState["errors"] = {};
  if (!data.parentName) errors.parentName = "Please tell us your name.";
  if (!emailRe.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.childAge) errors.childAge = "Please share your child's age.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please check the highlighted fields.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "MSCM Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — tour request not delivered:", data);
    return {
      status: "error",
      message: `Please call ${site.phone} or email ${site.email} to schedule a tour.`,
    };
  }

  const text = [
    `New tour request from the website`,
    ``,
    `Parent / guardian: ${data.parentName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Child's age: ${data.childAge}`,
    `Program interest: ${data.program || "—"}`,
    `Preferred tour times: ${data.preferredTimes || "—"}`,
    ``,
    `Message:`,
    data.message || "—",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Tour request — ${data.parentName} (child age ${data.childAge})`,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  } catch (err) {
    console.error("[contact] failed to send tour request", err);
    return {
      status: "error",
      message: `Something went wrong sending your request. Please call ${site.phone} or email ${site.email}.`,
    };
  }

  return {
    status: "success",
    message: "We'll reply within a couple of school days to confirm a time.",
  };
}
