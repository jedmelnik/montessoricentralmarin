"use client";

import { useActionState } from "react";
import { Button } from "@/components/Button";
import { submitTourRequest, type TourFormState } from "@/app/contact/actions";
import { programs } from "@/lib/site";

const initial: TourFormState = { status: "idle" };

const inputCls =
  "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-[1rem] text-ink placeholder:text-muted/70 focus:border-navy focus:outline-none focus:ring-2 focus:ring-sun/60 aria-[invalid=true]:border-red-500";

function Field({
  label,
  name,
  error,
  children,
  optional,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-navy">
        {label}
        {optional && <span className="ml-1.5 font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function TourForm() {
  const [state, action, pending] = useActionState(submitTourRequest, initial);
  const e = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-3xl bg-sage-tint p-8 text-navy">
        <p className="font-display text-2xl font-medium">Request received</p>
        <p className="mt-3 leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Parent / guardian name" name="parentName" error={e.parentName}>
          <input id="parentName" name="parentName" type="text" autoComplete="name" required aria-invalid={!!e.parentName} aria-describedby={e.parentName ? "parentName-error" : undefined} className={inputCls} />
        </Field>
        <Field label="Email" name="email" error={e.email}>
          <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!e.email} aria-describedby={e.email ? "email-error" : undefined} className={inputCls} />
        </Field>
        <Field label="Phone" name="phone" optional>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
        </Field>
        <Field label="Child's age" name="childAge" error={e.childAge}>
          <input id="childAge" name="childAge" type="text" placeholder="e.g. 2 years 8 months" required aria-invalid={!!e.childAge} aria-describedby={e.childAge ? "childAge-error" : undefined} className={inputCls} />
        </Field>
        <Field label="Program interest" name="program" optional>
          <select id="program" name="program" defaultValue="" className={inputCls}>
            <option value="">Not sure yet</option>
            {programs.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred tour days / times" name="preferredTimes" optional>
          <input id="preferredTimes" name="preferredTimes" type="text" placeholder="e.g. weekday mornings" className={inputCls} />
        </Field>
      </div>
      <Field label="Anything you'd like us to know?" name="message" optional>
        <textarea id="message" name="message" rows={4} className={inputCls} />
      </Field>

      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Sending…" : "Request a tour"}
        </Button>
        <p className="text-sm text-muted">We only use your details to arrange your visit.</p>
      </div>
    </form>
  );
}
