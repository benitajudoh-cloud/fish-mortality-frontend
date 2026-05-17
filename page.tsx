"use client";

import { useState } from "react";

export default function Home() {
  const [temperature, setTemperature] = useState("");
  const [ph, setPh] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [result, setResult] = useState("");

  const handlePredict = () => {
    const temp = Number(temperature);
    const p = Number(ph);
    const oxy = Number(oxygen);

    if (!temp || !p || !oxy) {
      setResult("Please fill all fields");
      return;
    }

    if (temp > 30 || oxy < 5) {
      setResult("High mortality risk");
    } else {
      setResult("Low mortality risk");
    }
  };

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Fish Mortality Prediction</h1>

      <input
        placeholder="Water Temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="pH Level"
        value={ph}
        onChange={(e) => setPh(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Dissolved Oxygen"
        value={oxygen}
        onChange={(e) => setOxygen(e.target.value)}
      />
      <br /><br />

      <button onClick={handlePredict}>Predict</button>

      <p>{result}</p>
    </main>
  );
}
