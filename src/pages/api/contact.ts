import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const rateLimit: Record<string, number> = {};
const EMAIL_REGEX = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { name, email, message } = req.body;

  if (name.length < 2 || name.length > 50) {
    return res.status(400).json({ error: 'invalid_name_length' });
  }
  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'invalid_email' });
  }
  if (message.length < 2 || message.length > 2000) {
    return res.status(400).json({ error: 'invalid_message_length' });
  }
  const ip = ((req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
    req.socket.remoteAddress ||
    'unknown') as string;

  const now = Date.now();
  if (ip && rateLimit[ip] && now - rateLimit[ip] < 60000) {
    return res.status(429).json({ error: 'too_many_requests' });
  }
  rateLimit[ip] = now;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New message from ${name} - ${email}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'email_send_failed' });
  }
}
