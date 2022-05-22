import React from "react";
import { useState } from "react";

import Header from "./Header";
import Navigation from "./Navigation";

import Content from "./Content";
import Filter from "./Filter";

const App: React.FC<{}> = () => {
  const [contentTransform, setContentTransform] = useState(false);

  const handleFilterTransform = (value: boolean) => {
    setContentTransform(value);
  };

  return (
    <div className="app">
      <div className="dashboard">
        <Filter handleFilterTransform={handleFilterTransform} />
        <div className={`dashboard__content ${contentTransform ? "dashboard__transform" : ""}`}>
          <div className="container">
            <Header />
            <Navigation />
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
