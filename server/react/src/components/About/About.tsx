// About.tsx
import face from "../../../public/images/face.png"
import "../../styles/sections.css"

export default function About() {
  
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="formation">About Me</h2>
        <p className="body-formation">Hey there! I'm Shakear, a full stack developer that's skilled in programming, application design,<br></br> and debugging.
        I’m a reliable and adaptable with strong analytical and communication skills.						
        </p>
        <p className="body-formation">
          Passionate about creating efficient, user-focused solutions, I thrive<br></br> in collaborative environments 
							and enjoy tackling challenges with a solution-oriented mindset.
        </p>
        <h4 className="formation">Education:</h4>
        <p className="body-formation">Bachelor of Science, Computer Science<br></br>
        Pennsylvania Western University, California | August 2021 - December 2025
        </p>

      </div>
      <div className="about-image-wrapper">
        <img src={face} alt="Profile" className="about-image" />
      </div>
    </section>
  )
}
