import React, { useEffect, useRef } from 'react'
/**
 * 
 * @returns create a component wit a text input field and a button
 * when the component moints or the button is clicked automatically focus the 
 * the textinput field
 */


const Assignment4 = () => {
    
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[inputRef])

    const handleFocus = ()=>{
        inputRef.current.focus();
    }

  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default Assignment4