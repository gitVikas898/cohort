let globalId = 1

function markDone(id){
    const parent = document.getElementById(id);
    parent.children[2].innerHTML ='done';
}

function addTodo(){
    const title = document.getElementById("js-todo-inp").value;
    const date = document.getElementById("js-date-inp").value;
    console.log(title , date);
    const todoContainer = document.getElementById('container');
    todoContainer.appendChild(createChild(globalId++,title,date));
}
function createChild(id,title,date){
    
    const childDiv = document.createElement("div");
    const grandChild1 = document.createElement("div");
    const grandChild2 = document.createElement("div");
    const grandChild3 = document.createElement("button");

    grandChild1.innerHTML = `${title}`
    grandChild2.innerHTML = `${date}`
    grandChild3.innerHTML = `Mark as Done`
    grandChild3.setAttribute("onclick",`markDone(${id})`);

    
    childDiv.appendChild(grandChild1)
    childDiv.appendChild(grandChild2)
    childDiv.appendChild(grandChild3)
    childDiv.setAttribute("id",id);
    return childDiv;
}

document.getElementById("js-add-inp").addEventListener("click",addTodo);


const todos = [
    {
        tittle:"Goto The Gym",
        description:"Leg Day",
        time:"2025-02-26"
    },
    {
        tittle:"Goto The Gym",
        description:"Leg Day",
        time:"2025-02-26"
    }
]