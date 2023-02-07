import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Product from "./Product";
import Customer from "./Customer";
import NotFound404 from "./NotFound404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nested from "./Nested";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<App />} />
          <Route path="customer" element={<Customer />} />
          <Route path="product" element={<Product name="guitar" />} />
          <Route path="product/:id" element={<Product name="guitar" />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route path="nested">
          <Route index element={<Nested />} />
          <Route path="subpage">
            <Route index element={<Customer />} />
            <Route path="customer" element={<Customer />} />
            <Route path="customer/:id" element={<Customer />} />
            <Route path="product/:id" element={<Product name="pNAme" />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
