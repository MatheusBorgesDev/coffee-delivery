import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Routes } from "./routes/index.tsx";

import { Header } from "./components/header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Routes />
  </React.StrictMode>
);
