import React from "react";

const CardSmall = () => {
  return (
    <div className="card-small">
      <div className="card-small__text">
        <h4 className="card-small__title">Some title</h4>
        <p className="card-small__text">Some text</p>
      </div>
      <div className="card-small__image">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg"
          alt="card-large-img"
        />
      </div>
    </div>
  );
};

export default CardSmall;
