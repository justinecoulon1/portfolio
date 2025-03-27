import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const rateLimit: Record<string, number> = {};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { name, email, message } = req.body;
  const ip = ((req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
    req.socket.remoteAddress ||
    'unknown') as string;

  const now = Date.now();
  if (ip && rateLimit[ip] && now - rateLimit[ip] < 60000) {
    return res.status(429).json({ error: 'Too many requests, try again later' });
  }
  rateLimit[ip] = now;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
