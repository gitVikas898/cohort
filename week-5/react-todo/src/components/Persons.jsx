import React, { useEffect, useState } from 'react'

const Persons = () => {
  const [persons,setPersons] = useState([]);
  const getData = async()=>{
    try{
      const response = await fetch("https://fakerapi.it/api/v1/persons");
      if(!response.ok){
        throw new Error("Error Occured")
      }
      const data = await response.json();
      setPersons(data.data)
    }catch(error){
      console.log(error)
    }
  }

  

  useEffect(()=>{
    let requestTimer = setInterval(()=>{
        getData()
    },5000);

    return () => clearInterval(requestTimer);

  },[])
  return (
    <div style={{display:"grid",gap:"1.5rem", padding:"1.5rem"}}>
        {persons.map((person)=>{
          return(
            <Card firstname={person.firstname} lastname={person.lastname} gender={person.gender} birthday={person.birthday} email={person.email}/>
          )
        })}
    </div>
  )
}

const Card = ({firstname,lastname,gender,birthday,email})=>{
  return (
    <div style={{border:"2px solid black", backgroundColor:"lavender",padding:"1.5rem"}}>
        <h3>{firstname}  {lastname}</h3>
        <p>{gender}</p>
        <p>{birthday}</p>
        <p>{email}</p>
    </div>
  )
}

export default Persons