import React, { useState } from "react";

const buttonStyle = `rounded-md bg-blue-400 hover:bg-blue-500 w-[200px] p-2 text-white 
  disabled:bg-gray-200 disabled:cursor-not-allowed`;

function Counter({ initialCount }: { initialCount: number | string }) {
  const parsedInitialCount = Number(initialCount);

  const [count, setCount] = useState<number>(
    isNaN(parsedInitialCount) ? 0 : parsedInitialCount
  );

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 data-testid="title">
        Count: <span data-testid="count">{count}</span>
      </h1>
      <div className="flex gap-2 p-4">
        <button className={buttonStyle} onClick={increment}>
          Increment
        </button>
        <button className={buttonStyle} onClick={decrement}>
          Decrement
        </button>
        <button className={buttonStyle} onClick={restart}>
          Restart
        </button>
        <button className={buttonStyle} onClick={switchSigns}>
          Switch Signs
        </button>
      </div>
    </div>
  );
}

export default Counter;
