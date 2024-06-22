import React from "react";
import "../styles/More.css"; // Assuming you have a CSS file for styling

function More() {
  return (
    <div className="App">
      <div className="card-container">
        <Card
          buttonText="Rate us"
          buttonClass="rate-button"
          description="click here if you want to rate us ...Please be right ,it will be helpful for us"
        />
        <Card
          buttonText="Donate"
          buttonClass="donate-button"
          description="click here if you want to rate us ...Please be right ,it will be helpful for us"
        />
        <Card
          buttonText="Support"
          buttonClass="support-button"
          description="click here if you want to rate us ...Please be right ,it will be helpful for us"
        />
      </div>
    </div>
  );
}

function Card({ buttonText, buttonClass, description }) {
  return (
    <div className="card">
      <p>{description}</p>
      <button className={buttonClass}>{buttonText}</button>
    </div>
  );
}

export default More;
