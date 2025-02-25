const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const button = document.getElementById("btn");

function findSum(a,b){
    return a+b
}

function validate(input1,input2){
    let errors = {};

    if(isNaN(input1) || input1.trim() === ""){
        errors.A = "Please enter a valid number";
        document.getElementById("error-a").innerHTML = errors.A;
    }else{
        document.getElementById("error-a").innerHTML = ''
    }
    if(isNaN(input2) || input2.trim() === ""){
        errors.B = "Please enter a valid number";
        document.getElementById("error-b").innerHTML = errors.B;
    }else{
        document.getElementById("error-b").innerHTML = ''
    }

    return errors;
}


button.addEventListener("click",()=>{
        const validation = validate(input1.value,input2.value);
        if(Object.keys(validation).length===0){
            const data = fetch(`http://127.0.0.1:3000/sum?a=${input1.value}&b=${input2.value}`,{
                
            });
            data.then(function(response){
                response.text().then(function(ans){
                    document.getElementById("result").innerHTML = `Sum is ${ans}` 
                })
            })
            
        }
})
