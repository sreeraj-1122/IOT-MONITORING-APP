// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { BreadcrumbProvider } from "./contexts/BreadcrumbContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BreadcrumbProvider>
          <App />
        </BreadcrumbProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
