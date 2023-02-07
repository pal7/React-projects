import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      <h1>Not Found! Contact Pal :/</h1>
      <Link to="/">Go back home</Link>
      <Link to="/customer">if you're a customer, go to customer page</Link>
    </div>
  );
};

export default NotFound404;
