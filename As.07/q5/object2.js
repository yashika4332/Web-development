const Employee ={
    ID : 10001,
    firstName : "Yashika",
    lastName : "Mandhan",
    department : "CS",
    designation : "place",
    salary : 100000,
fullName: function(){
        return this.firstName+" "+this.lastName;
    },
    feedback: function(){
        return "the Employee with "+this.ID+" id works in "+this.department+" department";
    }
};
console.log(Employee.fullName());
console.log(Employee.feedback());

const Employee2 ={
    ID : 10002,
    firstName : "raja",
    lastName : "Man",
    department : "HR",
    designation : "place",
    salary : 10000,
fullName: function(){
        return this.firstName+" "+this.lastName;
    },
    feedback: function(){
        return "the Employee with "+this.ID+" id works in "+this.department+" department";
    }
};
console.log(Employee2.fullName());
console.log(Employee2.feedback());