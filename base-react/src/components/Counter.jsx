import {  useState } from "react";

function Counter () {

const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount+1);

  };

  const decrement = () => {
    setCount((prevCount) => prevCount-1);
    if (count <= 0) {
        alert("Non puoi scendere sotto lo 0")
        setCount(count === 0)
    }
  };

    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
}

export default Counter;
