import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("Sending your message...");

    try {
      const response = await fetch(
        "https://yogesh-portfolio-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setSubmitMessage(result.message);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage(error.message || "Unable to send your message. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-subtitle">
            Have a question, project idea, or need help? Feel free to send me
            a message.
          </p>
        </div>

        <div className="row justify-content-center">

          {/* Contact Information */}
          <div className="col-lg-4 mb-4">
            <div className="contact-info">
              <h2>Let's Connect</h2>

              <p>
                If you have any questions, suggestions, project ideas, or
                business inquiries, you can contact me using the form.
              </p>

              <div className="info-item">
                <span>📧</span>
                <div>
                  <h5>Email</h5>
                  <p>yogeshkhanchi985@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <span>📍</span>
                <div>
                  <h5>Location</h5>
                  <p>Panipat, Haryana, India</p>
                </div>
              </div>

              <div className="info-item">
                <span>💻</span>
                <div>
                  <h5>Available For</h5>
                  <p>Projects & Freelance Work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card">

              <h2>Send Me a Message</h2>
              <p className="form-description">
                Fill out the form below and send me your query.
              </p>

              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="What is your query about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="form-label">
                    Your Query
                  </label>

                  <textarea
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Write your question or message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <button type="submit" className="btn send-btn">
                  Send Message 🚀
                </button>

                {submitMessage && (
                  <p className="form-submit-message" role="status">
                    {submitMessage}
                  </p>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;