## Installation
Clone this repo from Github. CD into the main directory using your console and run `bundle install` to install all Gem dependencies.

## Exercises
This repo contains domains for practicing building Object-Oriented Relationships. The descriptions for these exercises are located in the `exercises` directory. At the top of each file is a level indicating whether it is an easy, medium or hard domain. Harder levels include more models or more complex relationships. The harder models also include less explicit instructions about what methods to write. You should work to derive the methods that need to be defined from the relationship information given.

#### Easy
- [Airbnb](./exercises/airbnb.md)
- [Bakery](./exercises/bakery.md)
- [Lyft](./exercises/lyft.md)
#### Medium
- [IMDB](./exercises/imdb.md)
#### Hard
- [Crowdfunding](./exercises/crowdfunding.md)
- [Gym](./exercises/gym.md)

## Writing Code
You should write all your code for these domains in files in the `app/models` directory. You can create models for all of the challenges in there. If you name the models as specified, none of the exercises should conflict with each other.

## Testing Your Code
We've provided you with a console that you can use to test your code. Write all your code in the `app` folder so that it is loaded into the environment. To enter a console session, run `ruby tools/console.rb`. You'll be able to test out the methods that you write here.

## Creating Relationships
The complex relationships are not simple has_many_through or join relationships, so take the time to plan them out and draw them. If you see multiple ways to build those relationships, try both of them and see if you can identify benefits and weaknesses to each of those domain models. During project mode (and as a working developer) you will be responsible for building out domain models to represent real world situations. A poorly thought out domain can lead to brittle code that requires a lot of maintenance and rewriting in the future.
