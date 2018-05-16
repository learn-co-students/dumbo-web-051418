class Painting
  attr_accessor :price # i'm going change AND view the price
  attr_reader :painter, :size, :future_value # i'm JUST going to view the painter
  attr_writer :sentimental_value # i'm JUST going to change the value


  def initialize(x, cat, dog = false, price = 0)
    # called at the instantiation of the object
      # allows you to set the attributes
      # allowed run any arbitrary code
    # if it sees a variable
      # first check if that is a local variable
      # check instance methods on this class
    @price = price
    @future_value = price * 2.005
    @size = cat
    @sentimental_value = dog
    @painter = x
  end

  def future_value_print
    # => "$2.3 is the future value of this item"
    # self is the instance in an instance method
    # using the explicit self
    puts self.future_value
  end


  # self is the class in the class scope
  def self.arguments
    "Painter as string, size as int, sentimental_value as boolean, price as float"
  end

  # # reader
  #   # painting.price
  # def price
  #   @price
  # end
  #
  # # writer
  #   # painting.price = 200
  #   # painting.price=(200)
  # def price=(new_price)
  #   @price = new_price
  # end

  # def painter
  #   @painter
  # end
  #
  # def painter=(new_painter)
  #   @painter = new_painter
  # end
end









##
