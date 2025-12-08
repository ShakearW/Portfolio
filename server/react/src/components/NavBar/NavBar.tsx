// NavBar.tsx
import resumePDF from '../../assets/docs/Shakear_Resume.pdf';

import "../../styles/navbar.css"

// small utility scroll function; can replace with your utils/scroll.ts if present
const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function NavBar() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Shakear_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="site-nav">
      <ul>
        <li><button onClick={() => scrollTo("intro")}>Intro</button></li>
        <li><button onClick={() => scrollTo("about")}>About</button></li>
        <li><button onClick={() => scrollTo("experience")}>Experience</button></li>
        <li><button onClick={() => scrollTo("skills")}>Skills</button></li>
        <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
        <li>
          <button
            onClick={handleDownload}
            className="resume-btn"
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  )
}
