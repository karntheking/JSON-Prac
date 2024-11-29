// Creating student object for later manipulation
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
  