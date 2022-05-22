import React from "react";
import Button from "./common/Button";
import CardLink from "./common/CardLink";

const CardMedium = ({ data }) => {
  return (
    <div className="card-medium">
      <div className="card-medium__additional">
        <Button className="card-medium__theme">Tech fix</Button>
        <span className="card-medium__date">May 20, 2020</span>
      </div>
      <h2 className="card-medium__title">{data?.title}</h2>
      <CardLink />
    </div>
  );
};

export default CardMedium;
