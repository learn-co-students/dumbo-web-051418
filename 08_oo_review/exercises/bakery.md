# Level: Easy

## Deliverables
You are building an app for a national bakery chain
- your models are bakeries, desserts, ingredients
  - a bakery has many desserts
  - a dessert belongs to a bakery
  - a dessert has many ingredients
  - an ingredient belongs to a dessert
    - every ingredient has a calorie count
Write out the relationships using has_many, belongs_to and has_many_through. Create the necessary methods to connect these classes.

#### Bakery
- #ingredients
  - should return an array of ingredients for the bakery's desserts
- #desserts
  - should return an array of desserts the bakery makes
- #average_calories
  - should return a number totaling the average number of calories for the desserts sold at this bakery
- .all
  - should return an array of all bakeries
- #shopping_list
  - should return a string of names for ingredients for the bakery

#### Desserts
  - #ingredients
    - should return an array of ingredients for the dessert
  - #bakery
    - should return the bakery object for the dessert
  - #calories
    - should return a number totaling all the calories for all the ingredients included in that dessert
  - .all
    - should return an array of all desserts

#### Ingredients
  - #dessert
    - should return a dessert object for that ingredient
  - #bakery
    - should return the bakery object for the bakery that uses that ingredient
  - .all
    - should return an array of all ingredients
  - .find_all_by_name(ingredient)
    - should take a string argument return an array of all ingredients that include that string in their name
      - .find_all_by_name('chocolate') might return ['chocolate sprinkles', 'chocolate mousse', 'chocolate']
      - make sure you aren't just looking for exact matches (like 'chocolate' == 'chocolate')
