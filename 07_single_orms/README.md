# Single ORMS

## Objectives

* Define Object Relational Mapper (ORM)
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases
* Explain how the `sqlite` gem works as the driver or wrapper around SQL
* Perform persistent CRUD actions on two separate models

## Deliverables

### Each class

* Public Methods
  * `#initialize(attrs)` # Genre.new(attributes)
  * `#save`     
  * `#update(attrs)`
  * `#delete`
  * `.create(attrs)` # Genre.create(attributes)
  * `.all`
  * `.delete(id)`
  * `.find(id)`
  * `.find_by(attrs)`
* Helper Methods
  * `.new_from_row(row)`
  * `.conditions_from_hash(attrs)`
* Private Methods
  * `#mass_assign_attributes(attrs)`
  * `#insert_record`
  * `#update_record`
  * `#delete_record`
