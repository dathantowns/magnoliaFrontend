export const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://your-production-url.com"
    : "http://localhost:3001";

const getMenu = () => {
  return fetch(`${baseUrl}/menus/696840c632cbc71968447a2c`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkRes);
};

function getUserData(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
}

const sendOrder = (orderData) => {
  return fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error sending order:", error);
    });
};

const sendMessage = (messageData) => {
  return fetch(`${baseUrl}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error sending message:", error);
    });
};

const getToken = () => localStorage.getItem("jwt");

export { getMenu, sendOrder, sendMessage, baseUrl, getToken, getUserData };

// TODAY: Create api functions to interact with backend server
