import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Chargement...");

  useEffect(() => {
    fetch("http://16.170.201.69:8000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Erreur : " + err.message));
  }, []);

  return (
    <div>
      <h1>Test Frontend ↔ Backend</h1>
      <p>Message du backend : {message}</p>
    </div>
  );
}

export default App;

