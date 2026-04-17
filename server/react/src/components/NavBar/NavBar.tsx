// NavBar.tsx
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import LoginModal from "../Login_Modal/Login_Modal";
import resumePDF from '../../../public/docs/Shakear_Resume.pdf';
import "../../styles/navbar.css";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function NavBar() {
  const { isLoggedIn, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Shakear_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="site-nav-bar">
        
        {/* ── LEFT: Login / Active user ── */}
        <div className="nav-left">
          {isLoggedIn ? (
            <div className="active-user-wrapper">
              <span className="active-dot" />
              <span className="active-label">Active User</span>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="login-btn" onClick={() => setShowModal(true)}>
              Login
            </button>
          )}
        </div>
        {/* ── RIGHT: Nav links ── */}
        <ul className="site-nav">
          <li><button onClick={() => scrollTo("intro")}>Intro</button></li>
          <li><button onClick={() => scrollTo("about")}>About</button></li>
          <li><button onClick={() => scrollTo("experience")}>Experience</button></li>
          <li><button onClick={() => scrollTo("skills")}>Skills</button></li>
          <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
          <li>
            <button onClick={handleDownload} className="resume-btn">
              Resume
            </button>
          </li>
        </ul>
      </nav>
      

      {/* ── LOGIN MODAL ── */}
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </>
  );
}