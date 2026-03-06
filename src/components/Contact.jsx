import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PERSONAL_INFO } from "../../constants";

const Contact = () => {
  return (
    <section id="contact" className="section-wrap section-space" data-reveal>
      <div className="contact-shell">
        <div className="contact-copy">
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s build your next product</h2>
          <p>
            Available for React Native and MERN projects, product enhancements,
            and performance-focused front-end work.
          </p>
          <ul>
            <li>
              <Mail size={16} />
              <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
            </li>
            <li>
              <Phone size={16} />
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}>{PERSONAL_INFO.phone}</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>{PERSONAL_INFO.location}</span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="your@email.com" />

          <label htmlFor="message">Project Brief</label>
          <textarea id="message" rows={5} placeholder="Tell me what you are building..." />

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
