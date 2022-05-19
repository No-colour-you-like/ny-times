import React from "react";
import Button from "./common/Button";
import CardLink from "./common/CardLink";

const CardLarge = () => {
  return (
    <div className="card-large">
      <div className="card-large__image">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg"
          alt="card-large-img"
        />
      </div>
      <div className="card-large__additional">
        <Button className="card-large__theme">Tech fix</Button>
        <span className="card-large__date">May 20, 2020</span>
      </div>
      <h2 className="card-large__title">Some title</h2>
      <p className="card-large__text">Some text</p>
      <CardLink />
    </div>
  );
};

export default CardLarge;
