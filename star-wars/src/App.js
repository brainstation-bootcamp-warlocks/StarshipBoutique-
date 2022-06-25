import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";

const api = "https://swapi.dev/api/starships/";

function App() {
  const [starships, setStarships] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setStarships(data.results);
      });
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
}

export default App;
