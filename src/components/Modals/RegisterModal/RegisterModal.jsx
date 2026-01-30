import { useState, useEffect } from "react";
import { useUser } from "../../../../utils/contexts/userContext";
import { register } from "../../../../utils/auth";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({ closeModal, seeModal, openLoginModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { setUser, setIsLoggedIn, setToken } = useUser();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const data = await register({ name, email, password, phone });

      // Save user data to context
      setUser({
        name: data.name,
        email: data.email,
        phone: data.phone,
        id: data._id,
      });
      // No token returned from registration endpoint
      setIsLoggedIn(true);

      // Save to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          id: data._id,
        }),
      );

      // Close modal and reset form
      closeModal();
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset form when modal opens
  useEffect(() => {
    if (seeModal) {
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setError("");
      setIsLoading(false);
    }
  }, [seeModal]);

  const handleLoginClick = () => {
    closeModal();
    openLoginModal();
  };

  return (
    <ModalWithForm
      seeModal={seeModal}
      closeModal={closeModal}
      title="Sign up"
      name="register-modal__form"
      formId="register-modal__form"
      handleFormSubmit={handleSubmit}
      buttonText={isLoading ? "Creating Account..." : "Next"}
      isDisabled={isLoading}
    >
      {error && <div className="register-modal__error">{error}</div>}
      <label htmlFor="email-input" className="register-modal__label">
        Email*
        <input
          type="email"
          className="register-modal__input"
          id="email-input"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <span className="register-modal__input-error" id="email-error"></span>
      </label>
      <label htmlFor="password-input" className="register-modal__label">
        Password*
        <input
          type="password"
          className="register-modal__input"
          id="password-input"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
          minLength="6"
        />
        <span
          className="register-modal__input-error"
          id="password-error"
        ></span>
      </label>
      <label htmlFor="name-input" className="register-modal__label">
        Name
        <input
          type="text"
          className="register-modal__input"
          id="register-name-input"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          minLength="2"
          maxLength="30"
        />
        <span className="register-modal__input-error" id="name-error"></span>
      </label>
      <label htmlFor="phone-input" className="register-modal__label">
        Phone
        <input
          type="tel"
          className="register-modal__input"
          id="register-phone-input"
          placeholder="Phone Number"
          value={phone}
          onChange={handlePhoneChange}
          minLength="10"
          maxLength="15"
        />
        <span className="register-modal__input-error" id="phone-error"></span>
      </label>

      <button
        type="button"
        className="register-modal__login-btn"
        onClick={handleLoginClick}
      >
        or Log in
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
