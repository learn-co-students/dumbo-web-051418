# COFFEE

## Objective

* Perform full CRUD for 1 resource
* Understand Form Helpers

### Already Completed

* rails new brew-crew
* rails g model Brew blend_name origin notes strength:integer
* added 'faker' gem to Gemfile
* created seed data

##### Deliverables

* route for '/brews' that displays all of your coffees as links to their show pages
* route to create a new brew
* route to edit a brew
* route to '/brews/strongest' find the brews with the highest strength

* the brew show page should display a list of all of the customers who have enjoyed that brew

- Customer

  * should have a show page that displays the customer name and all of their purchases(as links to their show page)

- Purchase

  * should have a new page to create a new purchase
    * takes in a Customer's name (either new or existing) who is making the purchase
    * takes in purchase information
    * allows the customer to select a pre-existing brew of their choice
  * purchase show page shows the purchase information and has a link to the customer show and brew show associated to that purchase

- Bonus
  * a customer name should be unique
  * a purchase size should be small, medium, or large
  * a purchase creamer_strength should be light, regular, or none
  * a purchase's special_instructions shuld be less than 140 characters

### Needs

* Multiple options (select tag)
* Building out forms that build associations
* Nice, clean run
* Putting it all together
* Path helpers, forms

<!--  -->

User creation

* get information from a form on a website
* post that information to on of our routes
* create a user in the database

Authentication v Authorization

* Authentication
  * user sign in sign out
  * is this user authentic?
* Authorization
  * if you're authorized to do things in the app
  * is this user authorized to do this thing?

Validation

* ensuring what's being saved in the db is okay
