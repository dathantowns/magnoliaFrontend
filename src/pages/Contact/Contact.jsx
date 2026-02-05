import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to backend or email service
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h1 className="contact__title">Contact Us</h1>
      <p className="contact__description">
        Have a question about our menu, catering, business opportunities, or
        anything else? Leave us a message and our team will be happy to help.
      </p>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-field">
          <label className="contact__form-label">Name:</label>
          <input
            className="contact__form-input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact__form-field">
          <label className="contact__form-label">Email:</label>
          <input
            className="contact__form-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact__message-field">
          <label className="contact__form-label">Message:</label>
          <textarea
            className="contact__message-input"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>

        <button className="contact__submit-btn" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
