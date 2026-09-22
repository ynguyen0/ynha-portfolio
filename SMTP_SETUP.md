SMTP setup and usage
====================

Overview
--------
This project uses `nodemailer` in a server route to send contact form messages when SMTP credentials are provided via environment variables.

Files added
-----------
- `.env.local.example` — example variables to copy into `.env.local` for local development.

How to configure (local)
------------------------
1. Copy the example to a local dotenv file:

   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and fill in the values for your SMTP provider.

3. Restart the Next.js dev server so environment variables are picked up:

   ```bash
   npm run dev
   ```

4. Test the contact form in the running app (submit the form) or use curl:

   ```bash
   curl -i -X POST "http://localhost:3000/api/contact" \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Hello from test"}'
   ```

Notes for common providers
--------------------------
- Gmail: use an App Password (not your main account password) and set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER=your@gmail.com`, `SMTP_PASS=<app-password>`.
- SendGrid: use `SMTP_HOST=smtp.sendgrid.net`, `SMTP_USER=apikey`, and `SMTP_PASS=<your_sendgrid_api_key>`.
- Mailgun/Postmark: both provide SMTP credentials — use the host, port, user and pass they give.

Resend (recommended)
--------------------
Resend (https://resend.com) provides a simple HTTP API for sending emails. To use Resend instead of SMTP:

1. Create an API key in your Resend dashboard.
2. In `.env.local` set `RESEND_API_KEY` to that key and optionally set `RESEND_FROM` and `RESEND_TO`.
3. Restart the dev server — the API route will prefer Resend when `RESEND_API_KEY` is present.

Example `.env.local` snippet for Resend:

```env
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXX
RESEND_FROM=hello@yourdomain.com
RESEND_TO=yourname@example.com
```

Deployment
----------
When deploying (Vercel, Netlify, etc.), add the same variables in your project settings/environment variables panel. Example Vercel steps:

1. Go to your Project → Settings → Environment Variables.
2. Add `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_SECURE` and `TO_EMAIL` (if desired).
3. Redeploy the project.

Security
--------
- Never commit `.env.local` or real credentials to source control.
- Use provider-specific secrets or restricted API keys when possible.

Fallback behavior
-----------------
If SMTP is not configured, the API responds with HTTP 503 and the frontend falls back to opening a `mailto:` link so users can still contact you.
