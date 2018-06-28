# Object-Oriented JS

## Objectives
* Create objects as object literals or by instantiating them using new Object
* Add properties to store values (both primitive and non-primitive) on objects
* Write functions that use `this` and assign them as properties on objects
* Identify the differences between `bind`, `call`, and `apply`
* Use arrow functions to automatically bind context
  - arrow functions don't define their own `this`
  - arrow functions use `this` from the code that defined them
* Create a class using both ES5 and ES6 syntaxes. In both syntaxes:
  - Write a constructor
  - Instantiate a new object
  - Create private "class" variables using the ES6 class syntax, closures, and IIFEs
  - Write instance methods for JS classes
  - Write class methods for JS classes (e.g. filters and search functions)

THIS
function: `this` is the object that receives the method call
arrow: `this` is is the context where the function is defined, immediately bound to context

SELF
points to an instance if inside an instance method
points to a class if inside a class method or just loose inside a class
what receives the method call