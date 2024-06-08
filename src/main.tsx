import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Checkout } from "./checkout.tsx";
import "./index.css";
import { Header } from "./components/header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Checkout />
  </React.StrictMode>
);
