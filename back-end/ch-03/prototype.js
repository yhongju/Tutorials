/*
 * Inheritance in JavaScript
 * Prototype chain
 */

function Person(name) {
  this.name = name
}

// Init method with prototype
Person.prototype.greet = function greet() {
  return `Hello, ${this.name}!`
}

/* eslint-disable-next-line no-unused-vars */
function Student(name) {
  // For run "Person" constructor's statement "this.name = name"
  // If not runned before, value will be "undefined"
  /* eslint-disable-next-line no-proto */
  this.__proto__.constructor(name)
}

// Init method with prototype
Student.prototype.study = function study() {
  return `${this.name} is studying......`
}

// Connection
Object.setPrototypeOf(Student.prototype, Person.prototype)

// Function "Student" is constructor
const me = new Student("Hong-ju")

// // Check are methods run-able
// console.log(me.greet())
// console.log(me.study())

// // Built-in method "instanceof"
// // Returns bool-type value
// console.log(me instanceof Student)
// console.log(me instanceof Person)

// // "false" of "instanceof"
// const yongdam = new Person("Yong-dam")

// console.log(yongdam instanceof Student) // "false"
// console.log(yongdam instanceof Person) // "true"

// Array-type can use this too
console.log([] instanceof Array, [] instanceof Object) // "true"
