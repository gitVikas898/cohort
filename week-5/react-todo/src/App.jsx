import React, { useMemo,  useState } from 'react'

const App = () => {

  const [input,setInput] = useState(1);
  const [count,setCount] = useState(0);
 
  const findSum = useMemo(()=>{
    
    let n = parseInt(input);
    let total = 0;
    for(let i=1;i<n;i++ ){
      total+=i
    }
    console.log("Calculated")
    return total
  },[input])


  return (
    <div>
        <h1>Component that given n find sum till n</h1>
        <input type="text" value={input} placeholder='Enter N' onChange={(e)=>setInput(e.target.value)}/>
        <p>Sum is : {findSum}</p>
        <button onClick={()=>setCount(count+1)}>Count : {(count)}</button>
    </div>
  )
}

export default App