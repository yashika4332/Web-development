export default function formatCourse(course) {
  return `${course.courseName} by ${course.instructor} (${course.duration}) costs Rs. ${course.fee}`;
}