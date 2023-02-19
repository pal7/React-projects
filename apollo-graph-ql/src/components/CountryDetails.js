import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import "./CountryDetails.css";

const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      languages {
        name
      }
    }
  }
`;

function CountryDetails() {
  const { code } = useParams();
  console.log(code);
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( ;{console.log(error.message)}</p>;

  const { name, capital, currency, languages } = data.country;

  return (
    <div className="country-details-container">
      <h2 className="country-details-title">{name}</h2>
      <div className="country-details-content">
        <p>
          <strong>Capital:</strong> {capital}
        </p>
        <p>
          <strong>Currency:</strong> {currency}
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          {languages.map((lang) => lang.name).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default CountryDetails;
