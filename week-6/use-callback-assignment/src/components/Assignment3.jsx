import React from "react";
import { memo } from "react";
import { useCallback } from "react";
import { useState } from "react";
/**
 * create a counter component with increment and decrement function
 * pass these functions to a child component which has buttons to
 * preform the increment and decrement actions
 * use useCallback to ensure that these functions are not recreated on every render
 * @returns
 */
const Assignment3 = () => {
  const [count, setCount] = useState(0);

  const incremnet = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    
  },[])
  
  const decremnet = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
    
  },[])

  

  return (
    <div>
      <p>Count : {count}</p>
      <Counter incremnet={incremnet} decremnet={decremnet} />
    </div>
  );
};

const Counter = memo(({incremnet,decremnet}) => {
  console.log("Counter Component re rendered")
  return (
    <div>
      <button onClick={incremnet}>Increment</button>
      <button onClick={decremnet}>Decrement</button>
    </div>
  );
});
export default Assignment3;
