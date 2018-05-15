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

def search_book(term)
  response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{term}"

  # Find books off of a particular search term
  # List out the book's title, author, and publishDate
  binding.pry
end

search_book("cats")


#RestClient.get 'https://www.reddit.com/.json'
