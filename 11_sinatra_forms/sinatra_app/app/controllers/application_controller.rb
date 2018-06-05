# ApplicationController
# =====================
#  - Represents the top-level controller for our application
#  - A controller will **inherit** from Sinatra::Base
class ApplicationController < Sinatra::Base

  # Since we are writing a non-standard Sinatra application
  # (a.k.a. we are writing it with folders and a modular pattern),
  # we need to say where the root is and where the app is supposed
  # to find its views.
  set :root, File.join(File.dirname(__FILE__), '..')
  set :views, File.join(root, "views")
  set :method_override, true

  # RESTful Architecture
  # =====================
  # Describes a ***conventional*** set of actions for
  # our applications. It is a way to take our routes
  # and describe what should happen on the database
  # so it will match what CRUD actions are supposed to happen.
  # You will also begin to notice that the actions we
  # want to take will look similar no matter what the
  # resource is.


  # Index Route ('Show me all the things under this route')
  # =====================
  # At the index of a resource, we want to get all
  # of the items at that resource. So in this case
  # we want all the 'book' instances on our database
  # and we want it to be shown in the `index.html.erb`
  # file.
  get '/books' do
    @books = Book.all

    erb :'index.html'
  end

  # New Route ('Send me to a form to make a new thing')
  # =====================
  # At this route, we want our application to send us
  # to a form where **AFTER** we submit, we will try
  # to save it onto our database (hint: `create`). It will render the
  # `new.html.erb` file.
  get "/books/new" do
    erb :'new.html'
  end

  # Create Route ('After the form, send the data to the database')
  # =====================
  # Only **AFTER** someone hits submit, will they arrive to this route.
  # Our form from `new.html.erb` will send us here because
  # it sends a POST request to the resource. We won't do anything but
  # our necessary database actions then depending on success, will redirect
  # as necessary.
  post "/books/create" do
    # We could also just use .create but, let's say we want
    # something to be handled if it doesn't work. We can
    # just make it return us back to the form.
    # book = Book.create(params)

    book = Book.new(params)
    if book.save
      # If we are successful, redirect to the show page
      redirect "/books/#{book.id}"
    else
      # If we fail, redirect to the new form
      redirect '/books/new'
    end
  end

  # Show Route ('Show me a specific thing under this route')
  # =====================
  # Check this out and notice that it is a GET request.
  # Similar to the index route, we want it to send us data.
  # In this case, we want a SPECIFIC item from the resource.
  # We want to also be able to find it by some unique identifier,
  # typically the ID. We will use a variable parameter in the route.
  get "/books/:id" do
    book_id = params["id"] # the request's id
    @book = Book.find(book_id)

    erb :'show.html'
  end


  # Some routes we haven't built:
  # * Edit - Send me to a form that **AFTER** I submit,
  #           I will update something on the database
  # * Update - **AFTER** I submit the edit form, it will update the database
  # * Delete - Delete something under this route
end
