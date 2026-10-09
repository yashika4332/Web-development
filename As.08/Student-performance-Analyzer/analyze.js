const marks = [45, 78, 92, 61, 88, 54, 73,95];
// original
console.log(marks);
// inc 5
let inc = marks.map(marks=> marks+5);
console.log(inc);
// marks >= 70
let compare = marks.filter(marks=> marks>= 70);
console.log(compare);
// first marks > 90
let first = marks.find(marks=> marks>90);
console.log(first);
// total
let total = marks.reduce((sum,marks)=>sum+marks,0);
console.log(total);
// original
console.log(marks);



