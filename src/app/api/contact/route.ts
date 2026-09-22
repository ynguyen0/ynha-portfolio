export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const to = process.env.TO_EMAIL || process.env.SMTP_USER || process.env.RESEND_TO || null;

    // If RESEND_API_KEY is provided, use Resend HTTP API (no additional dependency required)
    if (process.env.RESEND_API_KEY) {
      const resendFrom = process.env.RESEND_FROM || `${name} <${email}>`;
      const payload = {
        from: resendFrom,
        to: to || email,
        subject: `Portfolio contact from ${name}`,
        html: `<p>${message.replace(/\n/g, "<br/>")}</p><p>From: ${name} &lt;${email}&gt;</p>`,
        text: message,
      };

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const details = await res.text().catch(() => null);
        return new Response(JSON.stringify({ error: "Resend error", details }), { status: 502 });
      }

      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Fallback to SMTP via nodemailer
    const host = process.env.SMTP_HOST;
    if (!host) {
      return new Response(JSON.stringify({ error: "No mail provider configured" }), { status: 503 });
    }

    // Dynamically import nodemailer only when SMTP is used (avoids top-level type issues)
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: to || process.env.SMTP_USER,
      subject: `Portfolio contact from ${name}`,
      text: message,
      html: `<p>${message.replace(/\n/g, "<br/>")}</p><p>From: ${name} &lt;${email}&gt;</p>`,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "Server error" }), { status: 500 });
  }
}
