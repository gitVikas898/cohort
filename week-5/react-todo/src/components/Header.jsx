import React from 'react'

const Header = React.memo(({title,updateTitle})=>{
    console.log(`Component rendered with title:${title}`)
    return(
        <header>
            <h1>My name is {title}</h1>
            <button onClick={updateTitle}>Update title</button>
        </header>
    )
})

export default Header