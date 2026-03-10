import React from "react";
import "./Certification.css";
import pic12 from "../assets/pic12.png";
import pic13 from "../assets/pic13.png";
import pic14 from "../assets/pic14.png";
import pic15 from "../assets/pic15.png";

const certifications = [
  {
    id: 1,
    imgSrc: pic12,
    title: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/96476ed5-a1d2-453a-96cb-0be749271079/public_url",
  },
  {
    id: 2,
    imgSrc: pic13,
    title: "AWS Certified Solutions Architect – Associate",
    url: "https://www.credly.com/badges/af545d1d-6af0-4f1d-b9e6-7715c4c0ee1e/public_url",
  },
  {
    id: 3,
    imgSrc: pic15,
    title: "AWS Certified DevOps Engineer – Professional",
    url: "https://www.credly.com/badges/8c129d37-8932-4eee-ba66-9613fd2b60a8/public_url",
  },
  {
    id: 4,
    imgSrc: pic14,
    title: "HashiCorp Certified: Terraform Associate",
    url: "https://www.credly.com/badges/3372ec6d-5ff3-4241-9498-a670b0c42fa5/public_url",
  },
];

const Certification = () => {
  return (
    <div className="certifications">
      <h2 className="certifications-header">Am I certified? <span>My Certifications</span></h2>
      <div className="certifications-container">
        {certifications.map((cert) => (
        //   <div className="certification-entry" key={cert.id} data-aos="zoom-in">
        //     <a href={cert.url} target="_blank" rel="noopener noreferrer">
        //       <img src={cert.imgSrc} alt={cert.title} />
        //     </a>
        //     <h3>{cert.title}</h3>
        //     <button className="validate-button">Validate</button>
        //   </div>
        <div className="certification-entry" key={cert.id} data-aos="zoom-in">
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <img src={cert.imgSrc} alt={cert.title} />
            </a>
            <h3>{cert.title}</h3>
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <button className="validate-button">Validate</button>
            </a>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
