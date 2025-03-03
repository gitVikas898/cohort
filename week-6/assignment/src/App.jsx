import React,{ useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count ,setCount] = useState(0)
  console.log("Parent App Rendered")
  return (
    <div>
        <h1>Assignments</h1>
        <p>{count}</p>
        <button onClick={()=>setCount((prev)=>prev+1)}>Count: {count}</button>
        <MemoisedFactorial/>
    </div>
  )
}
const Factorial = ()=>{
  const [input,setInput] = useState(1);
  const  [counter1,setCounter1] = useState(0);
  

  const findFactorial = (n)=>{
    console.log("Factorial Calculated");
      let factorial = 1;
      for(let i=1;i<=n;i++){
        factorial *=i;
      }
      return factorial;
  }

  const result = useMemo(()=>findFactorial(input),[input]);
    // const result = findFactorial(input);
  return(
    <div>
        <input type="text" placeholder='Enter number' value={input} onChange={(e)=>{
          const n = parseInt(e.target.value)||0;
          setInput(n)
        }} />
        <p>Factorial is: {result}</p>
        <button onClick={()=>setCounter1((prev)=>prev+1)}>Count is :{counter1}</button>
    </div>
  )
}

const MemoisedFactorial = React.memo(Factorial);
export default App
