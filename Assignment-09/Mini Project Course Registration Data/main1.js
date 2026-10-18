import { courses } from "./courses.js";
import formatCourse from "./course-utils.js";

const { courseName, fee } = courses[0];
console.log(`Summary: ${courseName} costs Rs. ${fee}`);
const newCourse = {
  courseName: "Cyber Security",
  instructor: "Bilal Shah",
  duration: "5 months",
  fee: 25000
};
const allCourses = [...courses, newCourse];
const updatedCourse = { ...courses[1], fee: 10000 };


console.log("Original courses");
console.log(formatCourse(courses[0]));
console.log(formatCourse(courses[1]));
console.log(formatCourse(courses[2]));

console.log("Courses with new one added ");
console.log(formatCourse(allCourses[3]));

console.log("Original vs updated fee");
console.log(formatCourse(courses[1]));
console.log(formatCourse(updatedCourse));

console.log("Original list length:", courses.length);  
console.log("New list length:", allCourses.length);     