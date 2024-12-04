// import React from "react";
// import "./Herosection.css";
// import pic01 from '../assets/pic01.png'; // Ensure this is the correct Cloud Engineer image
// import pic04 from '../assets/pic04.png'; // Decorative image

// const Herosection = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <div className="greeting">
//           Hello!
//         </div>
//         <h1>
//           I'm <span>Guru</span>, <br /> Cloud Engineer
//         </h1>
//         <div className="testimonial">
//           Guru's exceptional skills in cloud engineering ensured the success of our infrastructure. Highly recommended.
//         </div>
//         <div className="rating">
//           <span>⭐</span>
//           <span>⭐</span>
//           <span>⭐</span>
//           <span>⭐</span>
//           <span>⭐</span>
//         </div>
//       </div>
//       <div className="image-container">
//         <div className="background-shape"></div>
//         <img className="decorative-image" src={pic04} alt="Decorative Doodles" />
//         <img className="profile-picture" src={pic01} alt="Guru Cloud Engineer" />
//         <div className="cta-buttons">
//           <button className="btn-primary">Portfolio</button>
//           <button className="btn-secondary">Hire Me</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Herosection;

import React from "react";
import "./Herosection.css";
import pic01 from '../assets/pic01.png'; 
import pic04 from '../assets/pic04.png'; 

const Herosection = () => {
  return (
    <section className="hero">
      <div className="content-wrapper">
        <div className="top-content">
          <div className="greeting">Hello!</div>
          <h1>
            I'm <span>Guru</span>, <br /> Cloud Engineer
          </h1>
        </div>
        <div className="main-content">
          <div className="testimonial">
            "Guru's exceptional product design ensured our website's success. Highly recommended."
          </div>
          <div className="image-container">
            <div className="background-shape"></div>
            <img className="profile-picture" src={pic01} alt="Guru Cloud Engineer" />
          </div>
          <div className="rating">
            <div className="stars">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
            <p>10 Years Experience</p>
          </div>
        </div>
        <div className="cta-buttons">
          <button className="btn-primary">Portfolio</button>
          <button className="btn-secondary">Hire Me</button>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
