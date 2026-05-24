import { useNavigate } from "react-router-dom";
import MiniNavBar from "../components/MiniNav/MiniNav";
import Background from "../components/Background/Background";

import "../styles/wms.css"
// (optional) if you want home-specific tweaks later:
// import "../styles/home.css";

export default function Extra() {
  const navigate = useNavigate();

  const highlights = [
    {
      title: "Warehouse Management System",
      body:
        "A secure, role-based WMS built to support real-world warehouse workflows including inventory, purchasing, RMAs, scanning, and reporting.",
      action: "View Project Details",
      onClick: () => navigate("/details"),
    },
    {
      title: "HTML 5 Static Web Page",
      body:
        "This was one of my favorite static web pages I made in Web Development, Check it out down below.",
      action: "Static Page",
      onClick: () => navigate("/movie"),
    },
    {
      title: "Live Demo",
      body:
        "Explore the deployed application experience and see the system in action with real navigation and workflows.                Creds: demo  - DEMOUSER123#",
      action: "Open Dashboard",
      onClick: () => window.open("https://wmsproject.bcolditz.tech/dashboard", "_blank"),
    },
  ];

  const skills = [
    "React + TypeScript",
    "Node / APIs",
    "SQL / MySQL",
    "Docker",
    "Auth + RBAC",
    "UI/UX + Accessibility",
  ];

  return (
    <>
      <MiniNavBar />
      <Background />

      <div className="details-page page-offset">
        <div className="details-wrap">
          {/* HERO */}
          <h1 className="details-title">Shakear Wilson</h1>
          <p className="details-subtitle">Full-Stack Developer</p>

          <p className="details-intro">
            I build clean, secure, and scalable web applications. Below you’ll find my featured
            projects, technical strengths, and quick access to live demos and documentation.
          </p>

          
          {/* FEATURED / HIGHLIGHTS */}
          <div className="details-card">
            <h2 className="details-card-title">⭐ Featured</h2>
            <p className="details-card-lead">
              A quick overview of what I’m building and what I care about as a developer.
            </p>

            <div style={{ display: "grid", gap: 16 }}>
              {highlights.map((item) => (
                <div
                  key={item.title}
                  style={{
                    border: "1px solid rgba(17, 24, 39, 0.08)",
                    borderRadius: 14,
                    padding: 16,
                  }}
                >
                  <p style={{ fontWeight: 800, margin: "0 0 6px" }}>{item.title}</p>
                  <p style={{ margin: "0 0 12px", lineHeight: 1.7 }}>
                    {item.body}
                  </p>
                  <button className="btn btn-green" onClick={item.onClick}>
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div className="details-card">
            <h2 className="details-card-title">🧠 Core Skills</h2>
            <p className="details-card-lead">
              Strong fundamentals with a focus on real-world, production-ready implementation.
            </p>

            <ul className="details-list">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* CALL TO ACTION */}
          <div className="details-card">
            <h2 className="details-card-title">🚀 Let’s Connect</h2>
            <p className="details-body">
              If you’d like to see more work, talk about opportunities, or collaborate on a project,
              feel free to reach out through my portfolio site.
            </p>

            <div className="details-actions" style={{ marginTop: 16 }}>
              <button className="btn btn-green" onClick={() => navigate("/")}>
                 Back To Portfolio
              </button>
            </div>
          </div>

          <p className="details-footer">
            © 2026 Shakear Wilson. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
