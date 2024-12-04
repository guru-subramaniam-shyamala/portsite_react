// import React from "react";
// import './Herosection.css';
// import pic01 from '../assets/pic01.jpg';

// const Herosection = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1>
//           I'm <span>Guru</span>, <br /> Cloud Engineer
//         </h1>
//         <p>
//           I create user-friendly designs that solve real-world problems. Let’s
//           build something amazing together.
//         </p>
//         <div className="cta-buttons">
//           <button className="btn-primary">Portfolio</button>
//           <button className="btn-secondary">Hire Me</button>
//         </div>
//         <div className="testimonial">
//           <p>
//             Guru's exceptional architectural design and plan ensured our website's success.
//             Highly recommended.
//           </p>
//         </div>
//         <div className="rating">
//           <span>⭐ ⭐ ⭐ ⭐ ⭐</span> 
//         </div>
//       </div>
//       <img src={pic01} alt="Guru" />
//     </section>
//   );
// };

// export default Herosection;

import React from "react";
import "./Herosection.css";
import pic01 from '../assets/pic01.png';
import pic02 from '../assets/pic02.png';

const Herosection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          I'm <span>Guru</span>, <br /> Cloud Engineer
        </h1>
        <p>
          I create user-friendly designs that solve real-world problems. Let’s
          build something amazing together.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Portfolio</button>
          <button className="btn-secondary">Hire Me</button>
        </div>
        <div className="testimonial">
          Guru's exceptional architectural design and plan ensured our website's
          success. Highly recommended.
        </div>
        <div className="rating">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
      </div>
      <img className="background-shape" src={pic02} alt="Background Shape" />
      <img
        src={pic01}
        alt="Guru Cloud Engineer"
      />
    </section>
  );
};

export default Herosection;
