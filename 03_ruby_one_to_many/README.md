# One to Many Relationships

## Objectives

* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Practice passing custom objects as arguments to methods
* Demonstrate single source of truth
* Infer type of method (class or instance) through naming conventions

## Deliverables

* Create a Painter class.
  * `#initialize` which takes a name and date of birth
  * a reader and writer method for name
  * a reader method for date of birth
  * `#paintings` that returns an array of Painting instances
  * `#make_painting` that takes a title, width, and height. It creates a new Painting instance, and adds it to the Painter's painting collection
* Create a Painting class
  * should initialize with a title, width, and height
  * a reader and writer for title
  * a reader for width and height
  * `#painter` that returns an instance of the Painter class
  * `.all` that returns all the Paintings created.
  * `#painter_name` that returns the name of the Painting's Painter
