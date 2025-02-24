const getData = async () => {
  try {
    const response = await fetch("https://fakerapi.it/api/v1/persons");

    if(!response.ok){
        throw new Error("Error fetching data")
    }
    const data = await response.json();
    console.log(data.data);

    const containerElement = document.getElementById("container");

    const names = data.data;
    containerElement.innerHTML = "";

    names.forEach((name) => {
      const node = document.createElement("li");
      const textNode = document.createTextNode(
        name.firstname + " " + name.lastname
      );
      node.appendChild(textNode);
      containerElement.appendChild(node);
    });
  } catch (error) {
    console.log("Error occured", error);
  }
};

const button = document.getElementById("btn");
button.addEventListener("click", getData);
