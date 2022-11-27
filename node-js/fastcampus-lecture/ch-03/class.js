/*
 * Syntactic sugar of prototype and it's chain
 * Related with __dirname/prototype.js
 */

/* eslint-disable max-classes-per-file */
class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    return `Hello, ${this.name}!`
  }
}

class Student extends Person {
  // // "Useless constructor" by linter
  // constructor(name) {
  //   super(name)
  // }

  study() {
    return `${this.name} is studying......`
  }
}

const me = new Student("Hong-ju")

console.log(me.greet())
console.log(me.study())
