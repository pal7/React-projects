import React from "react";
import { Link } from "react-router-dom";

const Nested = () => {
  return (
    <div>
      <h1>Nested</h1>
      <Link to="/Nested/customer">Customer subpage</Link>
      <br />
      <Link to="/Nested/product">Product subpage</Link>
    </div>
  );
};

export default Nested;
