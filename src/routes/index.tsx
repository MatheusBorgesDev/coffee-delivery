import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Checkout } from "../pages/checkout";
import { Success } from "../pages/success";

export function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
