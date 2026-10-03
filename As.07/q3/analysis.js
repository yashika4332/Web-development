const marks = [78,45,92,66,88,54,91,73];
const marks2 = [22,33,44,55,66,77,88,99];

// combine
let combine = marks2.concat(marks);
console.log(combine);
// smaller portion
console.log(combine.slice(2,6));
// change one mark
let change = combine.splice(8,1,60);
console.log(combine);
// display
console.log(combine.length);
// sort
let arrange = combine.sort(function(a,b){return a-b});
console.log(arrange);
// reverse
arrange.reverse();
console.log(arrange);
let result = (marks)=> {
    console.log("Final marks:",marks);
}
result(arrange);