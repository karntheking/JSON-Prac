// 1. Creating student object for later manipulation

// Create a student object
const student = {
    name: "Jon Snow",
    age: 20,
    enrolled: true,
    courses: ["Math", "Physics", "Computer Science"],
    displayInfo() {
      return `Student: ${this.name}, Age: ${this.age}`;
    }
  };
  
  // Output name and age
  console.log(student.name); // Jon Snow
  console.log(student.age); // 21
  
  // Call and log the displayInfo method
  console.log(student.displayInfo());
  
// 2. Working with JSON

// Convert object to JSON string
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// Convert JSON string back to object
const newStudentObject = JSON.parse(studentJSON);
console.log(newStudentObject);

// Compare original and new object
console.log(student === newStudentObject); // should be false

// 3. Using destructuring assignment

// Extract name and courses from student object
const { name, courses } = student;
console.log(name); 
console.log(courses); 

// Create and destructure array of scores
const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log(score1); 
console.log(score2); 

// 4. The Spread Operator

// clone the student object
const clonedStudent = { ...student, graduationYear: 2025 };
console.log(clonedStudent);

// Merge two arrays
const newCourses = ["Biology", "Chemistry"];
const allCourses = [...student.courses, ...newCourses];
console.log(allCourses); 