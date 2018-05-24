# Level: Hard

## Deliverables
You are building an app for a gym. But this is not just any gym. It has many locations and many trainers. Each trainer has clients that can work out of any location provided that they have a trainer.
- your models are locations, trainers and clients
  - a location has many trainers
  - a trainer has many locations
  - a trainer has many clients
  - a client has one trainer
  - how is a client related to a location?

Write out the relationships using has_many, belongs_to and has_many_through. Write out a schema that shows what these tables might look like in a database. Where would the foreign keys live? Then *build out methods reflecting all these relationships.* What method can I call on a location to find all its clients, etc?

#### Client
- #assign_trainer
  - should take a trainer as argument and assign it to the client

#### Location
- .least_clients
  - should find which location has the least clients training there. we need to increase the marketing spend for that location!

#### Trainer
- .most_clients
  - should find which trainer has the most clients. give that trainer a bonus!
