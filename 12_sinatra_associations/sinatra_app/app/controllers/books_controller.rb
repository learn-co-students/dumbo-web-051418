class BooksController < ApplicationController # < Sinatra::Base
  # Index Route ('Show me all the things under this route')
  # =====================
  # At the index of a resource, we want to get all
  # of the items at that resource. So in this case
  # we want all the 'book' instances on our database
  # and we want it to be shown in the `index.html.erb`
  # file.
  get '/books' do
    @books = Book.all

    erb :'books/index.html'
  end

  # New Route ('Send me to a form to make a new thing')
  # =====================
  # At this route, we want our application to send us
  # to a form where **AFTER** we submit, we will try
  # to save it onto our database (hint: `create`). It will render the
  # `new.html.erb` file.
  get "/books/new" do
    erb :'books/new.html'
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

    binding.pry

    book = Book.new(book_params)
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

    erb :'books/show.html'
  end


  # Edit Route
  # =====================
  # We are gonna get sent to our form to edit data
  # Only after the form submits will we **update** anything
  get "/books/:id/edit" do
    book_id = params["id"] # the request's id
    @book = Book.find(book_id)

    erb :'books/edit.html' # => 'edit.html.erb'
    # erb :edit #=> 'edit.erb'
  end

  # Update Route
  # =====================
  # We are gonna get here only AFTER we got sent from
  # the edit form. It will redirect us to the show page
  # so that we can see our newly editted resource!
  patch "/books/:id" do
    book_id = params["id"] # the request's id

    @book = Book.find(params["id"])
    @book.update(book_params)

    redirect "/books/#{@book.id}"
  end

  # Delete Route
  # =====================
  # We will reach this whenever the browser,
  # sends a request to DELETE a resource. We
  # can add this on the show page so that way
  # we can delete something. But it will redirect
  # us back to the index route
  delete "/books/:id" do
    book_id = params["id"]
    book = Book.find(book_id)

    book.delete
    redirect '/books'
  end

  private

  # We use this method as a helper method in order
  # to grab data from our params that relate to the
  # object that the controller is related to.
  def book_params
    params["books"]
  end
end
