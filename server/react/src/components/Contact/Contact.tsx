// Contact.tsx
import { useState } from "react";
import "../../styles/contact.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailRegex.test(form.email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const token = localStorage.getItem("token");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-head">Contact</h2>
        <p className="contact-body">
          Thank you for taking the time to explore my portfolio ⭐. I hope this gave you a better
          look at my skills, my work, and the projects I'm passionate about. If you have any
          questions, opportunities, or just want to connect, first use our login and feel free to reach out via
          email down below 📩.
        </p>
        <p>
          Login Credentials: demo@portfolio.com - PassWord: demo1234
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="cta-btn" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send"}
          </button>
          {status === "success" && <p className="form-success">Message sent successfully! ✅</p>}
          {status === "error" && <p className="form-error">⚠ {errorMsg}</p>}
        </form>
      </div>
    </section>
  );
}