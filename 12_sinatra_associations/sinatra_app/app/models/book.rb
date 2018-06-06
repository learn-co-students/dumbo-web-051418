class Book < ActiveRecord::Base
  belongs_to :author # author_id foreign key on this table

  # Book.new(random: 'this is random')
  # def random=(val)
  #   puts val
  # end

  # Book.new(author_name: 'Charlotte Perkins Gilman')
  def author_name=(name)
    # see if there's an author with this name in database
      # if there is, associate them
      # if not, create a new author

    author = Author.find_by(name: name)

    if author.nil?
      author = Author.create(name: name)
    end

    self.author = author

    # author = Author.find_or_create_by(name: name)
    # self.author = author
  end

  def genres=(names)
    puts names.map(&:upcase)
  end
end
