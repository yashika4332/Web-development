// concat
const arr1 = ["car","bike","Truck","cycle"];
const arr2 = ["rice","flour","cucumber","carrot"];
const combine = arr2.concat(arr1);
console.log(combine);
// slice
console.log(arr2.slice(1,3));
// splice
arr1.splice(3,1);
console.log(arr1);
arr1.splice(3,0,"BMW");
console.log(arr1);
// delete
delete arr2[0];
console.log(arr2);
// length
console.log(arr1.length);
console.log(arr1);
console.log(arr2.length);
console.log(arr2);