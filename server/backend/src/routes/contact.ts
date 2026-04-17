// routes/contact.ts
import "dotenv/config";
import express, { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { authenticateToken } from "../middleware/auth";
import nodemailer from "nodemailer";
import validator from "validator";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // use an App Password, not your real password
  },
});




router.post("/contact", authenticateToken, async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!validator.isEmail(email) || email.split('.').pop()!.length < 2) {
  return res.status(400).json({ error: "Please enter a valid email address." });
  }

  console.log("✅ Email passed validation:", email);


  try {
    // Save to DB
    await prisma.contactMessage.create({
      data: { name, email, message },
    });

    // Send email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,      // your email
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ success: true, message: "Message sent!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong." });
  }
});

export default router;
