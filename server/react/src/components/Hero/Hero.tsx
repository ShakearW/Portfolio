// Hero.tsx
import hero from "../../../public/images/home.png"
import "../../styles/hero.css"
import { FaGithub, FaPaperPlane, FaWhatsapp, FaLinkedin} from "react-icons/fa";


export default function Hero() {
  return (
    <section id="intro" className="hero">
      <div className="hero-inner">
        <h4 className="waveformation">
          Hello <span className="wave">👋</span>, I'm
        </h4>
        <h1 className="hero-title">Shakear Wilson</h1>
        <p className="hero-sub">
          This website was made with tools and skills used in web development 🗺️.
        </p>
        <p className="hero-career">
          Junior Full Stack Developer
        </p>
        <div className="hero-cta">
          <a className="cta-btn" href="#contact">Contact Me</a>
        </div>
        <div className="hero-socials">
        <a className="github" href="https://github.com/ShakearW?tab=repositories" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a className="plane" href="mailto:officialkear@gmail.com">
          <FaPaperPlane />
        </a>

        <a className="whatsapp" href="https://wa.me/14128556605" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>

        <a className="linkedin" href="https://www.linkedin.com/in/shakear-wilson-5169502a7/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>  
      </div>
      </div>
      
      <div className="hero-image-wrapper">
        <img src={hero} alt="Profile" className="hero-image" />
      </div>

    </section>
  )
}
