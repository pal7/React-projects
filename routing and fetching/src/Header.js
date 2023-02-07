import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/customer">Customer</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Header;
