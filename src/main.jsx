import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import AppRoutes from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
