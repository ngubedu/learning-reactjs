import React, { useState } from "react";
import "./style.css";
function Counter(props) {
  const [number, setNumber] = useState(0);
  return (
    <div className="counter">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(0)}>reset</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
}
export default Counter;
