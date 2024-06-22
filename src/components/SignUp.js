import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    societyName: "",
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
        <h2>Create an account</h2>
        <label htmlFor="firstName">Nom</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="MATRIXA"
          required
        />
        <label htmlFor="lastName">Prenom</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Tendriari-niavo"
          required
        />
        <label htmlFor="societyName">Society name</label>
        <input
          type="text"
          id="societyName"
          name="societyName"
          value={formData.societyName}
          onChange={handleChange}
          placeholder="Lycee tsy mila mianatra fa mahay hoazy"
          required
        />
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email@domain.com"
          required
        />
        <Link to="/Dashboard">
          <button type="submit">Sign up</button>
        </Link>
        <p className="terms">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}

export default SignUp;
