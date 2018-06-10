# Intro to Rails

Rails is exceptionally powerful! We're gonna be using this from now on! Things
to remember is that the MVC (Model-View-Controller) pattern does not go away
WHATSOEVER. The purpose of Sinatra is to educate you on the building blocks
and now we are able to use the heavy set of tools. **IMPORTANT** note is that,
there is a TON of things inside of Rails. You will have to feel comfortable doing
the research when you don't understand something. You will have to feel comfortable
with practicing building applications. It is in your best interest to trace your
problem and be sure to test every premise.

## Making a new Rails app

Whenever you want to build a new Rails application, you can go over to your terminal
and run:

    $ rails new <application_name>
    $ rails new blog_app

Then it generates the similar structure that we have seen in Sinatra. Everything
we may care about the MVC data is within the `app/` folder. From there, we will
want to be sure to put the appropriate files in the appropriate places.

## Application Flow

If we wanted to follow the request-response lifecycle for how our applications
would work. We have our user make a request to a place, the route says, "go to
this controller and do the corresponding action for that route". We head over to
the controller and see the action and it will tell us do some stuff (more than likely
onto the models) and then we'll probably be asked to render a view!
So we will see inside of our `views/` folder for the corresponding resource.
And then ta-da! This is what will happen each time we go through our application.

### Helpful Tips
- `rails new <app_name>` - makes a new Rails application with the name you give it
- `rails s` - runs our rails application (on default of port `3000`)
- All rake commands can be replaced with `rails`
- `rails g <item>` - allows you to generate pieces of code, such as `controller`, `model`, `views`, etc.
- `rails d <item>` - allows you to destroy generated pieces of code
