"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.status === 200) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      const body = await res.json().catch(() => null);

      // If server isn't configured to send email, fallback to mailto:
      if (res.status === 503) {
        const recipient = (body && body.to) || "your-email@example.com";
        const subject = `Contact from ${name || "visitor"}`;
        const bodyText = `${message}\n\nFrom: ${name} <${email}>`;
        const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
        // Use assign to navigate to mailto. This avoids creating an about:blank in some environments.
        try {
          window.location.assign(mailto);
        } catch (e) {
          // As a last resort, open in the same tab
          window.location.href = mailto;
        }
        setStatus("idle");
        return;
      }

      setStatus("error");
      setError((body && body.error) || "Failed to send message.");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Failed to send message.");
    }
  };

  return (
    <section id="contact" className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="max-w-3xl w-full px-6 text-center">
        <h1 className="text-5xl mb-6 mt-10 ml-7">
            <span style={{ fontFamily: 'var(--font-atkinson)', fontWeight: 'bold' }}>let's </span>
            <span style={{ fontFamily: 'var(--font-doto)' }}>connect!</span>
          </h1>

        <div className="bg-white/5 backdrop-blur p-8 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                aria-label="Name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10"
                required
              />
              <input
                aria-label="Email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10"
                required
              />
            </div>

            <textarea
              aria-label="Message"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 min-h-[140px]"
              required
            />

            <div className="flex items-center justify-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 font-medium"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </div>

            {status === "sent" && <p className="text-green-400">Thanks — your message was sent.</p>}
            {status === "error" && <p className="text-red-400">{error}</p>}
          </form>
        </div>
        <p className="mt-8 text-lg" style={{ fontFamily: 'var(--font-atkinson)' }}>
          open to new roles and projects!
        </p>
      </div>
    </section>
  );
}
