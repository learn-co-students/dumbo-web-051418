class ApplicationController < Sinatra::Base

  set :root, File.dirname(__FILE__)
  set :views, "#{settings.root}/../views"

  # Go to this route and get back all
  # book resources
  # The Index route
  get '/books' do
    @books = Book.all

    erb :'index.html'
    # "<a href='/books/new'>Add a new book</a><ul>#{books.join}</ul>"
  end

  # Create a new book
  get "/books/new" do
    erb :'new.html'
  end

  post "/books/create" do
    # book = Book.create(params)
    book = Book.new(params)

    if book.save
      # redirect to the show page
      redirect "/books/#{book.id}"
    else

      redirect '/books/new'
      # redirect to the new form
    end

    # binding.pry
  end

  delete "/books/:id" do
    # book.destroy(id)
    binding.pry

  end

  # Go to this route and get back
  # specified resource for book
  get "/books/:id" do
    book_id = params["id"] # the request's id
    @book = Book.find(book_id)

    erb :'show.html'
  end
end
