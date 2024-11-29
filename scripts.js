// 1. Creating student object for later manipulation

// Create a student object
const student = {
    name: "John Snow",
    age: 20,
    enrolled: true,
    courses: ["Math", "Physics", "Computer Science"],
    displayInfo() {
      return `Student: ${this.name}, Age: ${this.age}`;
    }
  };
  
  // Output name and age
  console.log(student.name); // John Doe
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
