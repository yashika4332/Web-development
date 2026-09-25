let name = "Yashika";
let num =  19;
const stationary = ["Copy","Pen","Pencil","Eraser"];
// Array.isArray()
console.log(Array.isArray(name));
console.log(Array.isArray(num));
console.log(Array.isArray(stationary));
// Arrow Function
const showArray =(stationary) => {
    console.log(stationary);
};
showArray(stationary);
const simple = (value) =>{
    console.log(value);
};
simple("Showed !");
