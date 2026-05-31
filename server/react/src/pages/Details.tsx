import MiniNavBar from "../components/MiniNav/MiniNav";
import Background from "../components/Background/Background";
import Manual from "../../public/docs/User_Manual.pdf";
import Require from "../../public/docs/requirements.pdf";
import Specific from "../../public/docs/Specifications.pdf";
import Design from "../../public/docs/Design.pdf";
import "../styles/mininav.css"
import "../styles/wms.css"

function Details() {
   
  const toolsUsed = [
    "PHP",
    "Docker Container",
    "Apache",
    "GitHub Verison Control",
    "phpMyAdmin",
    "MySql",
    "BootStrap",
    "JavaScript",
    "CSS",
  ];

  const notableFeatures = [
    "Active Directory Authentication",
    "Role-based Access Control",
    "Vendor & Customer RMAs (Returns)",
    "Mobile QR Code Product Scanning",
    "Purchase Order invoice form emails to partner automatically",
    "Custom printable forms for purchase orders, customer orders, and RMAs",
    "Email Verification upon user registration",
    "Custom location & product labels",
    "Mobile-ready application",
    "Security-first approach to development",
  ];

  const docs = [
    { title: "📁 Warehouse User Guide (PDF)", src: Manual },
    { title: "📁 Requirements Document", src: Require },
    { title: "📄 Specifications Document", src: Specific },
    { title: "📄 Design Document", src: Design },
  ];

  return (
    <>
  <MiniNavBar />
  <Background />

  <div className="details-page page-offset">
    <div className="details-wrap">
      <h1 className="details-title">Warehouse Management System</h1>
      <p className="details-subtitle">Senior Project</p>

      <p className="details-intro">
        I learned backend development with a RBAC based mindset, along with some frontend development. I learned how to call data from tables and also how to manipulate data to be displayed.
        This project taught me about security with the use of tokens, hashed passwords, and active directory authentication.
        Below are system documentation, technical features, and access to a live deployment of the application.
      </p>

      
      <div className="details-card">
        <h2 className="details-card-title">📦 System Overview</h2>
        <p className="details-body">
          The Warehouse Management System (WMS) is a web-based application that supports mobile devices that are designed to
          streamline warehouse operations through automation, role-based access, and
          real-time inventory tracking.
          <br /><br />
          This system is integrated with mobile-friendly QR and barcode scanning to enable fast and
          accurate product handling across warehouse environments.
        </p>
      </div>

      <div className="details-card">
        <h2 className="details-card-title">🛠️ Tools Used</h2>
        <p className="details-card-lead">
          The system was developed using the following technologies and tools:
        </p>
        <ul className="details-list">
          {toolsUsed.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>

      <div className="details-card">
        <h2 className="details-card-title">⚙️ Notable Features</h2>
        <p className="details-card-lead">
          Key features implemented to support secure, scalable, and real-world
          warehouse workflows include:
        </p>
        <ul className="details-list">
          {notableFeatures.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>

      <div className="details-card">
        <h2 className="details-card-title">📄 Documents</h2>
        <p className="details-card-lead">
          The following documents outline the system’s requirements, design decisions,
          and usage instructions for both technical and non-technical users.
        </p>

        <ul>
          {docs.map((doc) => (
            <li key={doc.src} className="doc-item">
              <p className="doc-title">{doc.title}</p>

              <iframe
                src={doc.src}
                className="doc-frame"
                title={doc.title}
              />

              <a href={doc.src} download className="doc-download">
                Download PDF
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="details-footer">
          © 2026 Shakear Wilson. All rights reserved.
      </p>
    </div>
  </div>
</>

  );
}

export default Details;
