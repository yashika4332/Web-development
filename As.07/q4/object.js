const Employee ={
    ID : 10001,
    firstName : "Yashika",
    lastName : "Mandhan",
    department : "CS",
    designation : "place",
    salary : 100000,
}

console.log(Employee.firstName);
console.log(Employee.department);
console.log(Employee["designation"]);
console.log(Employee["salary"]);
// add new property
Employee.Gender = "Female";
// updating current one
Employee.firstName = "Yash";
// removing
delete Employee.designation; 
console.log(Employee);

