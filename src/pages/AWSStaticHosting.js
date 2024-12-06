import React from "react";
import styles from "../components/Portfolio.module.css";

const AWSStaticHosting = () => {
  return (
    <div className={styles.portfolio}>
      <h1>AWS Static Website Hosting</h1>
      <p>
        A project that showcases the use of AWS S3 and CloudFront to host a static website.
        The project demonstrates how to create a secure, high-performance, and scalable solution.
      </p>
      <img src="/assets/aws-static-hosting.png" alt="AWS Static Website Hosting" />
    </div>
  );
};

export default AWSStaticHosting;
