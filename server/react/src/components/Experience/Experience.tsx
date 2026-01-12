import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/experience.css";
import { FaGlobe } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";

export default function Experience() {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState<string | null>(null); // null = modal hidden
  const items = [
    {
      title: "Senior Project — Warehouse Management",
      text: "This project is a warehouse management system which can create efficient, organized, and responsive warehouse operations. Click on the icons for information about the system.​",
      github: "https://github.com/ShakearW/Personal_Website",
      website: "https://wmsproject.bcolditz.tech/",
      details: "These are the creds for the website, Username: demo PassWord: DEMOuser123#"
    },
    {
      title: "Personal Project — Bank Management System",
      text: "This is a Java based bank management system that displays data storage and data security along with backend management.",
      github: "https://github.com/ShakearW"
    },
    {
      title: "Web Development",
      text: "These are pages that I have made while taking a web development course, all the pages use HTML5. Feel free to click on the icons to explore them.",
      website: "details"
      // No links for this card
    },
    {
      title: "Frontend UI Engineering",
      text: "Developed interactive UI components using React, TypeScript, and responsive layouts." ,
      website: ""     
    },
    {
      title: "Backend Development",
      text: "Designed relational database schemas and optimized SQL queries for performance. Created RESTful APIs using Express.js, routing, table configuration, and database integrations."
    },
    {
      title: "DevOps Foundations",
      text: "Experience with Docker, Nginx, Linux servers, and environment configuration. Docker networks and multi-container setups for local dev and staging."
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
              {(item.github || item.website|| item.details) && (
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
                      <button
                        className="card-btn"
                        onClick={() => navigate("/extra")}
                        title="View details"
                      >
                        <FaGlobe size={25} />
                      </button>
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
          <div className="modal-box">
            <p>{modalContent}</p>
          </div>
        )}
      </div>
    </section>
  );
}
