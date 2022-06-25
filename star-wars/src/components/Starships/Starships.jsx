import React from "react";
import Card from "./components/Card/Card";

function Starships() {
  return (
    <section className="starships-section">
      <h2 className="starships-section__header">Ships For Your Taste</h2>
      <div className="starships-section__container">
        <Card />
      </div>
    </section>
  );
}

export default Starships;
