type Input = number | string
function first<T>(arr:T[]){
    return arr[0];
}


const value = first(["Vikas","Singh"]);

const out1 = first<string>(['Vikas' ,'Singh']);
console.log(out1.toUpperCase());

const out2 = first<number>([1,2,3,4]);
console.log(out2.toString());