import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import mockMenu from "./mockItemDB";
import LoginModal from "./components/Modals/LoginModal/LoginModal";
import RegisterModal from "./components/Modals/RegisterModal/RegisterModal";
import { getUserData, getMenu } from "../utils/api";
import { login, register } from "../utils/auth";
import { UserProvider } from "../utils/contexts/userContext";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [menu, setMenu] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [seeLoginModal, setSeeLoginModal] = useState(false);
  const [seeRegisterModal, setSeeRegisterModal] = useState(false);

  console.log("App.jsx rendered");

  useEffect(() => {
    getMenu()
      .then((menuData) => {
        setMenu(menuData);
        console.log("Menu data fetched:", menuData);
      })
      .catch((error) => {
        console.error("Failed to fetch menu:", error);
      });
  }, []);

  //RegisterModal functions
  const openRegisterModal = () => {
    setSeeRegisterModal(true);
  };

  const handleRegisterSubmit = (userData) => {
    register(userData)
      .then((registrationResponse) => {
        console.log("Registration successful:", registrationResponse);
        return login({ email: userData.email, password: userData.password });
      })
      .then((loginData) => {
        if (loginData && loginData.token) {
          localStorage.setItem("jwt", loginData.token);
        }
        setSeeRegisterModal(false);
        const token = loginData?.token || localStorage.getItem("jwt");
        if (token) {
          getUserData(token)
            .then((userDataResponse) => {
              console.log(
                "User data fetched after registration:",
                userDataResponse,
              );
              setCurrentUser(userDataResponse.data);
              setIsLoggedIn(true);
            })
            .catch((err) => {
              console.error(
                "Failed to fetch user data after registration:",
                err,
              );
            });
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };
  // loginModal functions
  const openLoginModal = () => {
    setSeeLoginModal(true);
  };

  const handleLoginSubmit = (credentials) => {
    login(credentials)
      .then(() => {
        setSeeLoginModal(false);
        const token = localStorage.getItem("jwt");
        if (token) {
          getUserData(token)
            .then((userData) => {
              console.log("User data fetched after login:", userData);
              setCurrentUser(userData.data);
              const redirectPath = routerLocation.state?.from?.pathname || "/";
              navigate(redirectPath, { replace: true });
              setIsLoggedIn(true);
            })
            .catch((err) => {
              console.error("Failed to fetch user data after login:", err);
            });
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const onClose = () => {
    setSeeLoginModal(false);
    setSeeRegisterModal(false);
  };

  return (
    <>
      <UserProvider>
        <Header
          cart={cart}
          setSeeLoginModal={setSeeLoginModal}
          setSeeRegisterModal={setSeeRegisterModal}
        />
        <Main
          cart={cart}
          setCart={setCart}
          menu={menu}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Footer />

        <LoginModal
          closeModal={onClose}
          seeModal={seeLoginModal}
          handleLoginSubmit={handleLoginSubmit}
          openRegisterModal={openRegisterModal}
        />

        <RegisterModal
          closeModal={onClose}
          seeModal={seeRegisterModal}
          handleRegisterSubmit={handleRegisterSubmit}
          openLoginModal={openLoginModal}
        />
      </UserProvider>
    </>
  );
}

export default App;
