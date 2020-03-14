import React, { useState } from "react";
import useStates from "../hooks/useStates";
import Statistics from "./Statistics";
import { Form } from "react-bootstrap";

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStates(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("POL");
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="row">
      <div className="col">
        <Form className="form">
          <Form.Label className="label">Choose a country</Form.Label>
          <Form.Control
            as="select"
            custom="true"
            onChange={e => {
              setSelectedCountry(e.target.value);
            }}
            defaultValue={selectedCountry}
          >
            {Object.entries(countries.countries).map(([country, code]) => (
              <option
                // selected={selectedCountry === countries.iso3[code]}
                key={country}
                value={countries.iso3[code]}
              >
                {country}
              </option>
            ))}
          </Form.Control>
        </Form>
        <h2 className="currently">Currently Showing {selectedCountry}</h2>
        <Statistics
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        />
      </div>
    </div>
  );
}
