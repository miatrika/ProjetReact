import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css";

function SignIn() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Ravis de vous retrouver</h2>
        <label htmlFor="firstName">Nom</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="NOM"
          required
        />
        <label htmlFor="lastName">Society Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Entrez le nom de la société"
          required
        />
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email@address.com"
          required
        />
        <Link to="/Dashboard">
          <button type="submit">Sign in</button>
        </Link>
        <p className="terms">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}

export default SignIn;
