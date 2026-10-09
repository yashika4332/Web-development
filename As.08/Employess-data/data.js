let employees = [
    { name: "Ali", department: "IT", salary: 80000 },
    { name: "Sara", department: "HR", salary: 70000 },
    { name: "Ahmed", department: "IT", salary: 95000 },
    { name: "Ayesha", department: "Finance", salary: 85000 }
];

let itEmp = employees.filter(employees=> employees.department === "IT");
console.log(itEmp);

let first = employees.find(employees=> employees.salary > 90000);
console.log(first);

let name = employees.map(employees=> employees.name);
console.log(name);

let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

console.log(total);

