let student1 = {
    name: "Ali",
    class: "BSCS-3",
    chem: 85,
    math: 90,
    urdu: 80,
    english: 88,

    result: function () {
        let total = this.chem + this.math + this.urdu + this.english;
        let percentage = (total / 400) * 100;

        console.log("Student:", this.name);
        console.log("Total Marks:", total);
        console.log("Percentage:", percentage + "%");
    }
};

console.log(student1.name);
console.log(student1.class);

// notation
console.log(student1["chemistry"]);

student1.result();

let student2 = {
    name: "Sara",
    class: "BSCS-3",
    chem: 78,
    math: 82,
    urdu: 91,
    english: 86,

    result: function () {
        let total = this.chem + this.math + this.urdu + this.english;
        let percentage = (total / 400) * 100;

        console.log("Student:", this.name);
        console.log("Total Marks:", total);
        console.log("Percentage:", percentage + "%");
    }
};

student2.result();

// Remove 
delete student2.urdu;

console.log("Student 2 after deleting Urdu:");
console.log(student2);