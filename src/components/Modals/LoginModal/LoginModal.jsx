import { useState, useEffect } from "react";
import { useUser } from "../../../../utils/contexts/userContext";
import { login, checkToken } from "../../../../utils/auth";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({ closeModal, seeModal, openRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { setUser, setIsLoggedIn, setToken } = useUser();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    console.log(
      "handleSubmit called with email:",
      email,
      "password:",
      password,
    ); // Debug log
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const data = await login({ email, password });
      console.log("Login response:", data); // Debug log

      let userData = null;
      // Get user data using the token
      try {
        userData = await checkToken(data.token);
        console.log("User data:", userData); // Debug log

        // Save user data to context
        setUser({
          name: userData.data.name,
          email: userData.data.email,
          phone: userData.data.phone,
          id: userData.data._id,
        });
      } catch (userDataError) {
        console.error("Error fetching user data:", userDataError);
        // Still set as logged in with just the token
      }

      setToken(data.token);
      setIsLoggedIn(true);

      // Save to localStorage
      localStorage.setItem("token", data.token);
      if (userData) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: userData.data.name,
            email: userData.data.email,
            phone: userData.data.phone,
            id: userData.data._id,
          }),
        );
      }

      // Close modal and reset form
      closeModal();
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset form when modal opens
  useEffect(() => {
    if (seeModal) {
      setEmail("");
      setPassword("");
      setError("");
      setIsLoading(false);
    }
  }, [seeModal]);

  const handleRegisterClick = () => {
    closeModal();
    openRegisterModal();
  };

  return (
    <ModalWithForm
      seeModal={seeModal}
      closeModal={closeModal}
      title="Log in"
      name="login-form"
      formId="login-form"
      handleFormSubmit={handleSubmit}
      buttonText={isLoading ? "Logging in..." : "Log in"}
      isDisabled={isLoading}
    >
      {error && <div className="login-modal__error">{error}</div>}
      <label htmlFor="login-email-input" className="login-modal__label">
        Email
        <input
          type="email"
          className="login-modal__input"
          id="login-email-input"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <span
          className="login-modal__input-error"
          id="login-email-error"
        ></span>
      </label>
      <label htmlFor="login-password-input" className="login-modal__label">
        Password
        <input
          type="password"
          className="login-modal__input"
          id="login-password-input"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
          minLength="6"
        />
        <span
          className="login-modal__input-error"
          id="login-password-error"
        ></span>
      </label>

      <button
        type="button"
        className="login-modal__register-btn"
        onClick={handleRegisterClick}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
