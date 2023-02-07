import React from "react";
import { useParams } from "react-router-dom";

const Customer = () => {
  const { id } = useParams();
  return <div>Customer {id}</div>;
};

export default Customer;
