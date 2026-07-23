"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import type { Mentor } from "@/lib/data";

type Props = {
  mentor: Mentor;
  onClose: () => void;
};

type Errors = Partial<Record<"name" | "email" | "date" | "slot" | "topic", string>>;

const SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "04:30 PM",
  "06:00 PM",
];

export default function BookingModal({ mentor, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    slot: "",
    topic: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.date) next.date = "Choose a preferred date.";
    if (!form.slot) next.slot = "Select a time slot.";
    if (!form.topic.trim()) next.topic = "Tell us what you'd like to cover.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const initials = mentor.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div
        ref={dialogRef}
        className="relative max-h-[92vh] w-full max-w-lg animate-fade-up overflow-y-auto rounded-t-3xl border border-white/10 bg-surface p-6 shadow-card sm:rounded-3xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close booking dialog"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6 flex items-center gap-4 pr-8">
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white"
                style={{ backgroundColor: mentor.accent }}
                aria-hidden="true"
              >
                {initials}
              </span>
              <div>
                <h2
                  id="booking-title"
                  className="font-display text-xl font-bold text-white"
                >
                  Book with {mentor.name}
                </h2>
                <p className="text-sm text-white/60">
                  {mentor.expertise} · ${mentor.price}/hr
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <Field label="Full name" error={errors.name} htmlFor="bk-name">
                <input
                  ref={firstFieldRef}
                  id="bk-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Jane Doe"
                  className="input"
                  aria-invalid={!!errors.name}
                />
              </Field>

              <Field label="Email" error={errors.email} htmlFor="bk-email">
                <input
                  id="bk-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="jane@example.com"
                  className="input"
                  aria-invalid={!!errors.email}
                />
              </Field>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  label="Preferred date"
                  error={errors.date}
                  htmlFor="bk-date"
                >
                  <input
                    id="bk-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="input"
                    aria-invalid={!!errors.date}
                  />
                </Field>

                <Field label="Time slot" error={errors.slot} htmlFor="bk-slot">
                  <select
                    id="bk-slot"
                    value={form.slot}
                    onChange={(e) => update("slot", e.target.value)}
                    className="input"
                    aria-invalid={!!errors.slot}
                  >
                    <option value="">Select a slot</option>
                    {SLOTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field
                label="What would you like to cover?"
                error={errors.topic}
                htmlFor="bk-topic"
              >
                <textarea
                  id="bk-topic"
                  rows={3}
                  value={form.topic}
                  onChange={(e) => update("topic", e.target.value)}
                  placeholder="e.g. Review my React project and career advice"
                  className="input resize-none"
                  aria-invalid={!!errors.topic}
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-violet-deep"
              >
                Confirm booking · ${mentor.price}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet/15">
              <CheckCircle2 size={40} className="text-violet-soft" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white">
              Session confirmed!
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              You&apos;re booked with{" "}
              <span className="font-semibold text-white">{mentor.name}</span> on{" "}
              <span className="font-semibold text-white">{form.date}</span> at{" "}
              <span className="font-semibold text-white">{form.slot}</span>. A
              confirmation has been sent to{" "}
              <span className="font-semibold text-white">{form.email}</span>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 rounded-full bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              Done
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: #fff;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }
        .input:focus {
          border-color: #7c5cff;
          box-shadow: 0 0 0 3px rgba(124, 92, 255, 0.25);
        }
        .input option {
          background: #141417;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-medium text-white/75"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-[#ff8a9c]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
