import React from "react";

type Url = {
  url: string;
};

const CardLink = ({ url }: Url) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="card-link">
      Continue reading
    </a>
  );
};

export default CardLink;
