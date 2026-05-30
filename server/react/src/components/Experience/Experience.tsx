import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/experience.css";
import { FaGlobe } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import {FaPaperPlane} from "react-icons/fa";

export default function Experience() {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<string | null>(null); // null = modal hidden
  const items = [
    {
      title: "College Senior Project — Warehouse Management System",
      text: "This project is a warehouse management system that could create efficient, organized, and responsive warehouse operations. Click on the icons for information about the system.​",
      github: "https://github.com/Bubbycolditz/WMS",
      website: "https://wmsproject.bcolditz.tech/",
      details: "Username: demo  -  Password: DEMOuser123#",
      more:"details"
    },
    {
      title: "Personal Project — Bank Management System",
      text: "This is a Java based bank management system that displays data storage and security along with backend management. This project used tools like Apache Netbeans (IDE), Java and Mysql. I learned how to management tables in a logic based database.",
      github: "https://github.com/ShakearW/Bank_Management_System"
    },
    {
      title: "Web Development",
      text: "There is more to this portfolio click the icon to go to those pages. These pages go more in-depth on the work its self with tools used and things that I learned.",
      website: "extra"
      // No links for this card
    },
    {
      title: "Frontend UI Engineering",
      text: "Developed interactive UI components using React, TypeScript, and responsive layouts to create this portfolio. Check it out on GitHub." ,
      github: "https://github.com/ShakearW/Personal_Website"     
    },
    {
      title: "Backend Development",
      text: "Designed relational database schemas and optimized SQL queries for performance. Created RESTful APIs using Express.js, routing, table configuration, and database integrations."
    },
    {
      title: "DevOps & Deployment Foundation",
      text: "Experience with Docker, Nginx, Linux servers, and environment configuration. Docker networks and multi-container setups for local dev and staging. With knowledge in deploying on Railway"
    }
  ];
  const showModal = (text: string) => {
    setModalContent(text);
    // Automatically hide after 6 seconds
    setTimeout(() => {
      setModalContent(null);
    }, 4000);
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="exform">Experience</h2>

        <div className="experience-grid">
          {items.map((item, index) => (
            <div className="experience-card" key={index}>
              
              {/* Only show card-top if there's a link */}
              {(item.github || item.website|| item.details || item.more ) && (
                <div className="card-top">
                <div className="btn-group">  
                  {item.github && (
                    <a
                      className="card-btn"
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiGithub size={25} />
                    </a>
                  )}
                  {item.website && (
                    item.website === "details" ? (
                      <a
                        className="card-btn"
                        onClick={() => navigate("/extra")}
                        title="View More"
                      >
                        <FaGlobe size={25} />
                      </a>
                    ) : (
                      <a
                        className="card-btn"
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe size={25} />
                      </a>
                    )
                  )}{item.more && (
                      <a
                        className="card-btn"
                        onClick={() => navigate("/details")}
                        title="View details"
                      >
                        <FaPaperPlane size={25} />
                      </a>
                  )}

                </div>  
                  {/* New Modal Button */}
                  {item.details && (
                    <button className="card-btn" onClick={() => showModal(item.details)}>
                      <FaInfoCircle size={25} />
                    </button>
                  )}

                </div>
              )}

              <h3>{item.title}</h3>
              <p>{item.text}</p>

            </div>
          ))}
        </div>
        {/* Simple modal box */}
        {modalContent && (
          <div className="ex-modal-box">
            <div className="ex-modal-box-header">
              <span className="ex-modal-box-dot"/>
              <span className="ex-modal-box-label">Demo Credentials</span>
            </div>
            <p>{modalContent}</p>
          </div>
        )}
      </div>
    </section>
  );
}
