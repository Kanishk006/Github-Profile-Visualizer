import React from "react";
import "../styles/errorpage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      
      <img src="/errorpage.png" alt="Error Illustration" className="image" />
      <p className="error-message1">Something went wrong. Please try again</p>
    </div>
  );
};

export default ErrorPage;
