const student = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];
// ayesha present
console.log(student.includes("Ayesha"));
// first sara position
console.log(student.indexOf("Sara")+1);
// last sara position
console.log(student.lastIndexOf("Sara")+1);
// find name that starts with A
let findA = student.find(finding);
console.log(findA);
// find name that starts with A its position
console.log(student.indexOf(findA)+1);
// find name that starts with A from last and its position
let lastp = student.findLast(finding);
console.log(lastp);
console.log(student.indexOf(lastp)+1);

function finding(name){
if( name.startsWith("A")){
    return name;
}


}