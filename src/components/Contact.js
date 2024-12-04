import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Have an Awesome Project Idea? Let's Discuss</h2>
      <p>Email me at: guru030601@gmailw.com</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
