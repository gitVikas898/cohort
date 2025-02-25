const todos = [
  {
    tittle: "Goto The Gym",
    desc: "Leg Day",
  },
  {
    tittle: "Read a Book",
    desc: "Read about Chess openings",
  },
];

function createTodo() {
  const tittle = document.getElementById("js-title-inp").value;
  const desc = document.getElementById("js-desc-inp").value;
  console.log(tittle, desc);
  let todoObject = {
    tittle: tittle,
    desc: desc,
  };
  todos.push(todoObject);
  console.log(todos);
}
function renderTodo(){
    createTodo()
    let parent = document.getElementById("container")
    todos.forEach((todo)=>{
        const child = document.createElement('div')
        const innerChild = document.createElement('p')
        innerChild.innerHTML = `${todo.tittle}`
        const innerChild2 = document.createElement('p')
        innerChild2.innerHTML = `${todo.desc}`
        child.appendChild(innerChild)
        child.appendChild(innerChild2);
        parent.appendChild(child);

    })
}
document.getElementById("btn").addEventListener("click", renderTodo);
