import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<Countries />} />
          <Route path="/country/:code" element={<CountryDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
