import MiniNavBar from "../components/MiniNav/MiniNav";
import W_Background from "../components/W_Background/W_Background";
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
  <W_Background />

  <div className="details-page page-offset">
    <div className="details-wrap">
      <h1 className="details-title">Warehouse Management System</h1>
      <p className="details-subtitle">Senior Capstone Project</p>

      <p className="details-intro">
        This page provides an overview of my senior capstone project — a full-scale
        Warehouse Management System designed to support secure, efficient, and
        scalable warehouse operations. Included below are system documentation,
        technical features, and access to a live deployment of the application.
      </p>

      
      <div className="details-card">
        <h2 className="details-card-title">📦 System Overview</h2>
        <p className="details-body">
          The Warehouse Management System (WMS) is a web-based application designed to
          streamline warehouse operations through automation, role-based access, and
          real-time inventory tracking.
          <br /><br />
          The system supports inventory control, purchase order processing, returns
          management, and reporting while maintaining a strong focus on security and
          usability.
          <br /><br />
          Mobile-friendly QR and barcode scanning are integrated to enable fast and
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
        Developed as part of a senior-level software engineering capstone project.
      </p>
    </div>
  </div>
</>

  );
}

export default Details;
