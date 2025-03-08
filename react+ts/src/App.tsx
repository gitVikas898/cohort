import './App.css'

interface Todos{
  title:string,
  description:string,
  isDone:boolean
}

interface Todoprops{
  todos:Todos,
}

function App() {
  
  const todos = {
    title:"Gym",
    description:"Leg Day",
    isDone:false
  }

  return (
    <>
      <Todo todos={todos}/>
    </>
  )
}

function Todo(props:Todoprops){
    return(
      <div>
          <h1>{props.todos.title}</h1>
          <p>{props.todos.description}</p>
      </div>
    )
}

export default App
