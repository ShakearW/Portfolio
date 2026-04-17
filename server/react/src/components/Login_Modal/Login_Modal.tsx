// components/LoginModal.tsx
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import "../../styles/login_modal.css";
 
interface LoginModalProps {
  onClose: () => void;
}
 
export default function LoginModal({ onClose }: LoginModalProps) {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
 
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
 
      const data = await res.json();
 
      if (!res.ok) {
        setErrorMsg(data.error || "Invalid credentials.");
        setStatus("error");
        return;
      }
 
      login(data.token);
      onClose();
    } catch {
      setErrorMsg("Unable to connect. Please try again.");
      setStatus("error");
    }
  };
 
  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };
 
  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-box">
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
 
        <div className="modal-header">
          <span className="modal-dot" />
          <h2>Welcome back</h2>
          <p>Sign in to send me a message</p>
        </div>
 
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
 
          <div className="modal-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>
 
          {status === "error" && (
            <p className="modal-error">⚠ {errorMsg}</p>
          )}
 
          <button
            type="submit"
            className="modal-submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className="modal-spinner" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}