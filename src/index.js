import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import CartProvider from "./components/CartContext";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./components/AuthContext"; // ✅ Use default import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider> 
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);



