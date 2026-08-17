"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Copy, Loader2, Mail, Send } from "lucide-react";
import { profile } from "@/lib/content";

// "handoff" is the no-backend path: we opened the visitor's mail client but have
// no way to know whether the message was actually sent, so we must not claim it
// was. Set profile.formspreeId to get the real "sent" path.
type Status = "idle" | "sending" | "sent" | "handoff" | "error";

const MIN_MESSAGE = 15;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Opportunity");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const messageValid = message.trim().length >= MIN_MESSAGE;
  const formValid = name.trim().length > 1 && emailValid && messageValid;

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `[Portfolio] ${subject}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formValid || status === "sending") return;
    setStatus("sending");
    setError("");

    const payload = { name, email, subject, message };

    // Use Formspree if configured; otherwise fall back to the user's mail client.
    if (profile.formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("sent");
        setName(""); setEmail(""); setMessage(""); setSubject("Opportunity");
      } catch {
        setStatus("error");
        setError("Something went wrong — please email me directly.");
      }
    } else {
      window.location.href = mailtoHref;
      setStatus("handoff");
    }
  }

  if (status === "sent" || status === "handoff") {
    const handedOff = status === "handoff";
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card flex flex-col items-center justify-center gap-3 p-10 text-center"
        role="status"
        aria-live="polite"
      >
        {handedOff ? (
          <Mail className="text-accent" size={40} />
        ) : (
          <CheckCircle2 className="text-accent" size={40} />
        )}
        <h3 className="text-lg font-semibold">
          {handedOff ? "Your email app should be open" : "Thanks — message on its way!"}
        </h3>
        {handedOff ? (
          <>
            <p className="max-w-sm text-sm text-muted">
              Your message is ready to send in your mail app — it isn&apos;t sent until you
              hit send there. Nothing opened? Use one of these instead:
            </p>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
              <a
                href={mailtoHref}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-border px-4 text-sm transition-colors hover:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                <Mail size={15} /> Open mail app
              </a>
              <button
                type="button"
                onClick={async () => {
                  await navigator.clipboard?.writeText(`${profile.email}\n\n${message}`);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2500);
                }}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-border px-4 text-sm transition-colors hover:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                <Copy size={15} /> {copied ? "Copied!" : "Copy address & message"}
              </button>
            </div>
          </>
        ) : (
          <p className="text-sm text-muted">I&apos;ll get back to you within 24 hours.</p>
        )}
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 cursor-pointer text-sm text-accent hover:underline"
        >
          {handedOff ? "Back to the form" : "Send another"}
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/60";

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-muted">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-muted">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            autoComplete="email"
            className={inputClass}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-medium text-muted">
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          className={inputClass}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option>Opportunity</option>
          <option>Collaboration</option>
          <option>Freelance / Consulting</option>
          <option>Just saying hi</option>
        </select>
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="contact-message" className="block text-xs font-medium text-muted">
            Message
          </label>
          <span
            className={`font-mono text-[11px] ${
              messageValid ? "text-accent" : "text-muted/70"
            }`}
          >
            {message.trim().length}/{MIN_MESSAGE}+
          </span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          className={`${inputClass} min-h-28 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the role, project, or idea…"
          required
        />
        {message.length > 0 && !messageValid && (
          <p className="mt-1.5 text-[11px] text-muted">
            💡 Tip: a little more detail helps me give a useful reply.
          </p>
        )}
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="flex items-center justify-between gap-4">
        <span className="text-[11px] text-muted">⚡ I respond within 24 hours.</span>
        <button
          type="submit"
          disabled={!formValid || status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-transform enabled:hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send size={16} /> Send message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
