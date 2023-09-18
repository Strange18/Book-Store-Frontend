import "./user_login_style.css";
import React, { useState } from "react";

function UserLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, e.g., sending a request to an API
    console.log("Form submitted with data:", formData);
  };
  return (
    <>
      <div className="main-area">
        <div className="art-section">
          <p>this is a art section.</p>
        </div>
        <div className="vertical-line"></div>
        <div className="login-form">
          <form action="/" method="post">
            <div className="username">
              <label htmlFor="username">Username</label> <br />
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="submit-button">
              <button onClick={handleSubmit} type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
