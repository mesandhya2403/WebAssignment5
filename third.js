let name;
console.log("Undefined example 1:");
console.log(name); //undefined

let numArray = [5,6,,8];
console.log(numArray);  
//[1, 2, empty, 4]
console.log("Undefined example 2:")
console.log(typeof(numArray[2]));
//"undefined"

let add = (a,b) => {
    let c = a+b;
    //return c;
}
let sum = add(2,3);
console.log("Undefined example 3:")
console.log(sum); 

console.log("Not defined example:")
console.log(b);
b = 5;