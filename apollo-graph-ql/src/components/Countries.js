import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import "./Countries.css";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;

function Countries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="countries-container">
      <h2>List of Countries</h2>
      <ul className="countries-list">
        {data.countries.map(({ code, name }) => (
          <li key={code} className="country-item">
            <span>{name}</span>
            <Link to={`/country/${code}`}>
              <button className="details-button">Get Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
