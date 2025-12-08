// Contact.tsx

import "../../styles/contact.css"

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-head">Contact</h2>
        <p className="contact-head">Thank you for taking the time to explore my portfolio ⭐. I hope this gave you a better look 
    						at my skills, my work, and the projects I’m passionate about. If you have any questions, 
    						opportunities, or just want to connect, please feel free to reach out using the form below 📩.  
    						I look forward to hearing from you — and thanks again for visiting! 🙌</p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input name="name" placeholder="Name" />
          <input name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <button type="submit" className="cta-btn">Send</button>
        </form>
      </div>
    </section>
  )
}

