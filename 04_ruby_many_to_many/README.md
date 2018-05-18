# One to Many Relationships

## Objectives

* Implement both sides of a many to many relationship
* Practice keeping groups of data related to classes on the class as a class variable
* Demonstrate single source of truth by not storing collections of objects on other objects
* Demonstrate single source of truth by not storing one object in multiple collections

## Deliverables

* Create a Painter class
  * `#initialize` which takes a name and date of birth
  * a reader and writer method for name
  * a reader method for date of birth
  * `#paintings` that returns an array of Painting instances
  * `#galleries` that returns an array of Gallery instances
  * `#make_painting` that takes a title, width, and height. It creates a new Painting instance, and adds it to the Painter's painting collection

* Create a Painting class
  * should initialize with a title, painter, gallery, and year
  * a reader and writer for title
  * a reader for year, painter and gallery
  * `#painter` that returns an instance of the Painter class
  * `.all` that returns all the Paintings created.
  * `#painter_name` that returns the name of the Painting's Painter

* Create a Gallery class
  * should initialize with a name
  * a reader method for name
  * `#paintings` that returns an array of Painting instances
  * `#painters` that returns an array of Painter instances
