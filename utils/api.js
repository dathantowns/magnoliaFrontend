const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://your-production-url.com"
    : "http://localhost:3001";

const getItems = fetch(`${baseUrl}/items`).then((res) => res.json());

const createUser = (userData) => {
  return fetch(`${baseUrl}/createUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
    })
    .catch((error) => {
      console.error("Error creating user:", error);
    });
};

const loginUser = (credentials) => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
};

const sendOrder = (orderData) => {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderData),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error sending order:", error);
    });
};

export { getItems, createUser, loginUser, sendOrder };
