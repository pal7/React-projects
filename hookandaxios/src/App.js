import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products); // log the data returned by the API
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error)); // log any errors
  }, []);

  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>
      <ul className="products-list">
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            <h2 className="product-name">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
