# Level: Easy

## Deliverables
You are building an app for an Airbnb competitor
- your models are listings, guests, trips
  - a listing (i.e. a house or apartment) has many trips
    - a listing has a city attribute which is a string of a city name, e.g. 'Seattle'
  - a guest has many trips
  - a trip belongs to a listing and a guest

Write out the relationships using has_many, belongs_to and has_many_through. Create the necessary methods to connect these classes.

#### Listing
- #guests
  - returns an array of all guests who have stayed at a listing
- #trips
  - returns an array of all trips at a listing
- #trip_count
  - returns the number of trips that have been taken to that listing
- .all
  - returns an array of all listings
- .find_all_by_city(city)
  - takes an argument of a city name (as a string) and returns all the listings for that city
- .most_popular
  - finds the listing that has had the most trips

#### Guest
- #listings
  - returns an array of all listings a guest has stayed at
- #trips
  - returns an array of all trips a guest has made
- #trip_count
  - returns the number of trips a guest has taken
- .all
  - returns an array of all guests
- .pro_traveller
  - returns an array of all guests who have made over 1 trip
- .find_all_by_name(name)
  - takes an argument of a name (as a string), returns the all guests with that name

#### Trip
- #listing
  - returns the listing object for the trip
- #guest
  - returns the guest object for the trip
- .all
  - returns an array of all trips
