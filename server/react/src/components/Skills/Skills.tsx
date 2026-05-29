
import { FaReact, FaNodeJs, FaPhp, FaDocker,FaJava,FaHtml5 } from "react-icons/fa";
import { SiMysql, SiTypescript, SiExpress, SiPrisma, SiGithub, SiJavascript, SiPostman, SiCss3, SiCplusplus,SiTailwindcss, SiRailway } from "react-icons/si";
import "../../styles/skills.css";

const skills = [
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "PHP", icon: <FaPhp color="#777BB4" /> },
  { name: "Docker", icon: <FaDocker color="#2496ED" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Express.js", icon: <SiExpress color="#08fe77ff" /> },
  { name: "REST API", icon: <SiPostman color="#FF6C37" /> },
  { name: "Prisma", icon: <SiPrisma color="#0C344B" /> },
  { name: "GitHub", icon: <SiGithub color="#e11effff" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "HTML 5", icon: <FaHtml5 color="#b32222ff" /> },
  { name: "Railway", icon: <SiRailway color="rgb(243, 243, 243)" /> }

];


function Skills() {
  return (
    <section id="skills" className="about-section">
      <h2 className="skill-form">Skills and Tools</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill-item"
          style={{ animationDelay: `${index * 0.1}s` }}>
            
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

