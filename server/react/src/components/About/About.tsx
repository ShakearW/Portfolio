// About.tsx
import face from "../../../public/images/face.png"
import "../../styles/sections.css"

export default function About() {
  
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="formation">About Me</h2>
          <p className="body-formation">Hello, I’m Shakear, a junior full-stack developer with experience building and deploying responsive web applications from front to back.
           I work with both frontend and backend technologies to create scalable, user-focused applications with clean design and efficient functionality. I am reliable, adaptable, and detail-oriented.
            I possess strong analytical, problem-solving, and communication skills.				
          </p>
          <h4 className="formation">Education:</h4>
          <p className="body-formation">Bachelor of Science, Computer Science<br></br>
          Pennsylvania Western University, California | August 2021 - December 2025
          </p>
        </div>
        <div className="about-image-wrapper">
          <img src={face} alt="Profile" className="about-image" />
        </div>
      </div>
    </section>
  )
}