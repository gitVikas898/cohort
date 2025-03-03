import React, { useRef, useState } from 'react'

/**
 * 
 * @returns Create a component that tracks and displays the number of
 * times it has been rendered.Use useref to create a variable that persists across
 * renders without causing additional re renders when it changes
 */

const Assignment5 = () => {

    const [count ,setCount] = useState(0);

    // Incorrect way 
    // 
    
    let renderCount = useRef(0); // so here useref just remembers the current value and does not trigger render on change 
     
    renderCount.current++
    console.log("Componet re rendered",renderCount)
    const handleReRender = ()=>{
        setCount(count+1);
        // setNumberOfRender(numberOfRender+1);
    }


  return (
    <div>
        <p>This Component has rendered {renderCount.current} times</p>
        <button onClick={handleReRender}>Force Re-Render</button>
    </div>
  )
}

export default Assignment5