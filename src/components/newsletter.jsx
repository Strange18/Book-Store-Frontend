import "./newsletter_style.css";
import { useState } from "react";

function Newsletter() {
  const [formData, setFormData] = useState({
    newsletter: "",
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
      <div className="newsletter">
        <h2>Subscribe to Newsletter!</h2>
        <form action="/" method="post">
          <input
            type="text"
            placeholder="Enter Your Email"
            name="newsletter"
            pattern="[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}"
            value={formData.newsletter}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit} type="button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Newsletter;
