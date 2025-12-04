import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
/// <reference types="vite/client" />

createRoot(document.getElementById("root")).render(<App />);
