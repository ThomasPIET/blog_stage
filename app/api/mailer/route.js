// app/api/sendEmail/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mailerthomaspiet@gmail.com',
      pass: 'ltjs wrun pjxp nxov',
    },
  });

  let mailOptions = {
    from: 'mailerthomaspiet@gmail.com',
    to: 'mailerthomaspiet@gmail.com',
    subject: 'Vous avez reçu une demande de contact.',
    text: `Nom: ${name}; email: ${email}; message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
  }
}