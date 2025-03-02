import React, { useCallback, useState } from 'react'

const App = () => {
  const [count ,setCount] = useState(0);

  // Inefficeint way of doing things here Button Component thinks handle click is a new function everytime because the refrential value is different
  // const handleClick=()=>{
  //   setCount(prevCount=>prevCount+1);
  // }

  // To prevent this renrendring we can use useCallback for memoising the function

  const handleClick = useCallback(()=>{
    setCount((prevCount)=>prevCount+1);
  },[])
  
  return (
    <div>
        <h1>{count}</h1>
        {console.log("parent component rendered")}
        <Button handleClick={handleClick}/>
    </div>
  )
}

const Button = React.memo(({handleClick})=>{
  return(
    <>  
        {console.log("Button Compnent Rendered")}
       <button onClick={handleClick}>Increase</button>
    </>
   
  )
})

export default App