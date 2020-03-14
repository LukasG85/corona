import React from "react";
import useStates from "../hooks/useStates";
import { Card } from "react-bootstrap";

export default function Stats({ url }) {
  const { stats, loading, error } = useStates(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="row card-container">
      <div className="col-md-4">
        <Card className="card">
          <Card.Body>
            <Card.Title className="card__title">Confirmed:</Card.Title>
            <Card.Text className="card__text">
              {stats.confirmed ? stats.confirmed.value : "No data"}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-4">
        <Card className="card">
          <Card.Body>
            <Card.Title className="card__title">Recovered:</Card.Title>
            <Card.Text className="card__text rescovered">
              {stats.recovered ? stats.recovered.value : "No data"}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card className="card">
          <Card.Body>
            <Card.Title className="card__title">Deaths:</Card.Title>
            <Card.Text className="card__text death">
              {stats.deaths ? stats.deaths.value : "No data"}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
