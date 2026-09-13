let marks = prompt("Enter the marks");
let grade;
if (marks >= 90 && marks <= 100) {
    grade = 'A';
} else if (marks >= 80 && marks <= 89) {
    grade = 'B';
} else if (marks >= 70 && marks <= 79) {
    grade = 'C';
}
else if (marks >= 60 && marks <= 69) {
    grade = 'D';
} else if(marks < 60) {
    grade = 'F';
} else{
    console.log("INvalid Marks");
}
console.log("Grade: "+grade+"Marks: "+marks);

// tested thrice
// Grade: D Marks: 60
// Grade: F Marks: 55
// Grade: A Marks: 90

