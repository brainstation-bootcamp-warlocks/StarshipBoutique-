import React from "react";

function Card() {
  return (
    <div className="starship-container">
      <img className="starship-container__image"></img>
      <ul className="starship-container__details">
        <li>Name:</li>
        <li>Manufacturer:</li>
        <li>Cost in Credits:</li>
        <li>Length:</li>
        <li>Max Atmosphering Speed:</li>
        <li>Crew:</li>
        <li>Passengers:</li>
        <li>Cargo Capacity:</li>
        <li>Consumables:</li>
        <li>Hyperdrive Rating:</li>
        <li>Starship Class:</li>
      </ul>
    </div>
  );
}

export default Card;
