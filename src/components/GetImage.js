import React from "react";

const img = `https://covid19.mathdro.id/api/og`;

export const GetImage = () => {
  return (
    <div className="row">
      <img className="stats-img" src={img} alt="statistic" />
    </div>
  );
};
