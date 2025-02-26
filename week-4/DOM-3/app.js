// const todos = [
//   { 
//     id:1,
//     tittle: "Goto The Gym",
//     desc: "Leg Day",
//   },
//   {
//     id:2,
//     tittle: "Read a Book",
//     desc: "Read about Chess openings",
//   },
// ];

async function createTodo() {
  const tittle = document.getElementById("js-title-inp").value;
  const desc = document.getElementById("js-desc-inp").value;
  

  if (tittle.trim() === "" || desc.trim() === "") {
    alert("Please enter both title and description!");
    return;
}
  let todoObject = {
    tittle: tittle,
    desc: desc,
    isCompleted:false
  };

  const data = await fetch("http://127.0.0.1:3000/todos",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(todoObject)
  });

  const response = await data.json();

  console.log("Data Sent Successfully",response);
  
  renderTodo()
  
}
async function renderTodo(){
    const response = await fetch("http://127.0.0.1:3000/todos");
    const data = await response.json();
    const todos = data.todos
    let parent = document.getElementById("container")
    parent.innerHTML =''
    todos.forEach((todo,index)=>{
        const child = document.createElement('div')
        child.setAttribute("class","content-div")
        child.setAttribute("id",`todo-${index+1}`)
        const innerChild = document.createElement('p')
        innerChild.innerHTML = `Title: ${todo.tittle}`
        const innerChild2 = document.createElement('p')
        innerChild2.innerHTML = `Description: ${todo.desc}`
        const markdone = document.createElement("button")
        markdone.innerHTML = todo.isCompleted ? 'Done' : 'Mark as Done'
        markdone.addEventListener("click",()=>markDone(index))
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = 'Delete'
        deleteButton.setAttribute("class","delete-btn");
        deleteButton.addEventListener("click",()=>deleteTodo(index))
        
        child.appendChild(innerChild)
        child.appendChild(innerChild2);
        child.appendChild(markdone);
        child.appendChild(deleteButton);
        parent.appendChild(child);

    })
}

async function markDone(id){
    const parent = document.getElementById("container");
    parent.children[id].children[2].innerHTML = 'Done'

    const response = await fetch(`http://127.0.0.1:3000/todos/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
    });

    const data = await response.json();

    console.log("Put Request made",data);
}

async function deleteTodo(id) {
  const response = await fetch(`http://127.0.0.1:3000/todos/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
    },
  });
  const data = await response.json();

    console.log("Delete Request made",data);

    renderTodo()
}
renderTodo()
document.getElementById("btn").addEventListener("click",  createTodo);

