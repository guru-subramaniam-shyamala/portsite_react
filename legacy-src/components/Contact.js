import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contactHeader">
        <h2>
          Have an <span>Awesome Project Idea?</span> Let’s Discuss
        </h2>
      </div>
      <form className="contactForm">
        <div className="emailInputWrapper">
          <div className="emailIcon">📧</div>
          <input
            type="email"
            placeholder="Enter Email Address"
            required
          />
          <button type="submit" className="sendButton">
            Send
          </button>
        </div>
      </form>
      <div className="achievements">
        <div className="achievement">
          ⭐ <span>4.9/5 Average Ratings</span>
        </div>
        <div className="achievement">
          🏆 <span>5+ Winning Awards</span>
        </div>
        <div className="achievement">
          ✔️ <span>Certified Cloud Engineer</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
