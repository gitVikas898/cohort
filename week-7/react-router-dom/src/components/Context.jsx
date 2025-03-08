import React, { useContext, useState } from "react";
import { CountContext } from "../constants/context";

const Context = () => {
  const [count, setCount] = useState(0);

  return <div>
    <CountContext.Provider value={{count,setCount}}>
       <Count/>
    </CountContext.Provider>
   
  </div>;
};
const Count = () => {
  console.log("Count Component Rendered")
  return <div>
    <Countrender/>
    <Buttons/>
  </div>;
};

const Countrender = () => {
  const {count} = useContext(CountContext)
  return <div>
    {count}
  </div>;
};

const Buttons = () => {
  const {count,setCount} = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};
export default Context;
