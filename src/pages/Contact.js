import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    checkFormValidity();
  };

  const checkFormValidity = () => {
    const { name, email, subject, message } = formData;
    setIsButtonDisabled(
      !name || !email || !subject || !message || name.length > 50 || email.length > 50 || subject.length > 500
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isButtonDisabled) {
      return;
    }

    emailjs
      .send(
        "service_mopvt88", // Your service ID
        "template_vf42cff", // Your template ID
        formData,
        "QnPIDYe_dSgVXWXTH" // Your public key
      )
      .then(
        (response) => {
          console.log("Message sent successfully", response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("Error sending message", error);
          setStatus("An error occurred, please try again.");
        }
      );
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="field-container">
          <label>
            Name <span className="required">*</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength="50"
              required
            />
          </label>
        </div>
        <div className="field-container">
          <label>
            Email <span className="required">*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              maxLength="50"
              required
            />
          </label>
        </div>
        <div className="field-container">
          <label>
            Subject <span className="required">*</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              maxLength="500"
              required
            />
          </label>
        </div>
        <div className="field-container">
          <label>
            Message <span className="required">*</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" disabled={isButtonDisabled}>
          Send Message
        </button>
      </form>
      {status && <div className={`status ${status.includes("success") ? "success" : "error"}`}>{status}</div>}
    </div>
  );
};

export default Contact;
