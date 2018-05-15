require 'rest-client'
require 'json'
require 'pry'


# def get_data(url)
# response = RestClient.get url
#
# JSON.parse(response.body)
# end
#
# puts get_data('https://www.reddit.com/.json')

# The Base URL: https://www.googleapis.com/books/v1/volumes?q={}

def welcome
  puts "Welcome to Google Books Finder!"
end

def get_user_input
  puts "What term would you like to look for?"
  gets.chomp
end

def search_for_term(term)
  response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{term}"
  json = JSON.parse(response)

  json
end

def book_info(json)
  json["items"].map do |book|
    {
      title: book["volumeInfo"]["title"],
      publisher: book["volumeInfo"]["publisher"],
      publishedDate: book["volumeInfo"]["publishedDate"]
    }
  end
end

def display_books(books)
  books.each do |book|
    puts "*" * 8
    puts "Title: #{book[:title]}"
    puts "Publisher: #{book[:publisher]}"
    puts "Published Date: #{book[:publishedDate]}"
  end
end


def run
  welcome                             # Here we put the welcome message
  search_term = get_user_input        # Ask our user for what they want to look for
  json = search_for_term(search_term) # Make a request to the API to get data
  books = book_info(json)             # Organize to display book's title, book's publisher, and publishing date

  display_books(books)                # Show us info about the books
end

run                                   # Finally to run it all


#RestClient.get 'https://www.reddit.com/.json'
