class ApplicationController < Sinatra::Base

  # Go to this route and get back all
  # book resources
  get '/books' do
    books = Book.all.map do |book|
      "<li><a href='/books/#{book.id}'>#{book.title}</a></li>"
    end

    "<ul>#{books.join}</ul>"
  end

  # Go to this route and get back
  # specified resource for book
  get "/books/:id" do
    book_id = params["id"] # the request's id
    book = Book.find(book_id)

    "<h1>#{book.title}</h1><p>#{book.snippet}</p>"
  end
end
