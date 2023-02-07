import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Product = ({ name }) => {
  const { id } = useParams();

  return (
    <div>
      <h1> Product = {name + "   " + id}</h1>
      <h2>this is the id component, still able to read it from the URL</h2>
      <h3>{id}</h3>
    </div>
  );
};

export default Product;
