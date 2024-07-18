import React from 'react';

function Counter({ count, increment, decrement, reset }) {
  return (
    <div>
      <div className="font-semibold text-2xl">Counter: {count}</div>
      <button onClick={increment} className="btn">Increment</button>
      <button onClick={decrement} className="btn">Decrement</button>
      <button onClick={reset} className="btn">Reset</button>
    </div>
  );
}

export default Counter;
