import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h2>Counter App</h2>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>➕ Increase</button>
        <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
        <button onClick={() => setCount(0)}>🔁 Reset</button>
      </div>
    </div>
  );
}

export default Counter;

