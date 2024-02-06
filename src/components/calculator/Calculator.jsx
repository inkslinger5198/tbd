import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [averageMeetings, setAverageMeetings] = useState("");
  const [averageDealSize, setAverageDealSize] = useState("");
  const [closingRate, setClosingRate] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const meetings = parseFloat(averageMeetings);
    const dealSize = parseFloat(averageDealSize);
    const rate = parseFloat(closingRate);

    if (!isNaN(meetings) && !isNaN(dealSize) && !isNaN(rate)) {
      const calculatedResult = (meetings * dealSize * rate) / 100;
      setResult(calculatedResult.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="opportunities">Average Monthly Meetings</label>
        <input
          type="number"
          id="opportunities"
          value={averageMeetings}
          onChange={(e) => setAverageMeetings(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="deal-size">Average Deal Size ($)</label>
        <input
          type="number"
          id="deal-size"
          value={averageDealSize}
          onChange={(e) => setAverageDealSize(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="win-rate">Closing Rate %</label>
        <input
          type="number"
          id="win-rate"
          value={closingRate}
          onChange={(e) => setClosingRate(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="button" onClick={calculate}>
          Calculate
        </button>

        <div className="Result">
          <h3>Estimated Revenue:</h3>
          <p>{result !== null ? `${result} $` : "Enter values to generate revenue"}</p>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
