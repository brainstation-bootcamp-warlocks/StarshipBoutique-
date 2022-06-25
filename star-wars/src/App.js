import React, { useState, useEffect } from "react";

const api = "https://swapi.dev/api/starships/";

function App() {
  const [starships, setStarships] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results)
      setStarships(data.results)
    });
},[]);

return(
  <>
  <div></div>
  </>
)
}

export default App;
