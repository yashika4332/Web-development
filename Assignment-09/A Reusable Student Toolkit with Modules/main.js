import getTotalMarks, { getFullName } from "./studentToolKit.js";

const fullName = getFullName("Sara", "Ahmed");
const total = getTotalMarks(80, 75, 90, 85);

console.log(`Full name: ${fullName}`);
console.log(`Total marks: ${total}`);