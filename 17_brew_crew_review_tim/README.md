# README

## Objective
* Perform full CRUD for 1 resource
* Understand Form Helpers

### Already Completed
* rails new brew-crew
* rails g model Brew blend_name:string origin:string notes:string strength:integer
* added 'faker' gem to Gemfile
* created seed data


##### Deliverables
* route for '/brews' that displays all of your coffees as links to their show pages (2/2)*****
* route to create a new brew ****
* route to edit a brew ***
* route to delete a brew ***
* route to '/brews/strongest' find the brews with the highest strength **

#### Bonus
* strength should only be from 1-5

## Deliverables p2

* Customer model
* Customer has a name
* Customer name should be unique
* When a brew is created, customer name should be taken
  * Customer should be found or created by name in DB
* On the brew show page, display list of customers
