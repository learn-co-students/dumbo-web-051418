class Painter
  attr_accessor :name
  attr_reader :dob

  # These are required fields we want
  # everytime we create a new Painter
  def initialize(name, dob)
    @name = name
    @dob = dob
  end

  # In an ideal world, a painter is the
  # only object that can create a new Painting
  # To figure out what is needed for a Painting
  # Read the `painting.rb`
  def make_painting(title, width, height)
    # **QUIZ** What is self in this line?
    Painting.new(title, width, height, self)
  end

  def paintings
    # We want to find all the paintings that
    # were made by this Painter. We iterate
    # through all paintings and select the
    # ones that match. This is because of the
    # **SINGLE SOURCE OF TRUTH**
    Painting.all.select do |painting|
      painting.painter == self
    end
  end
end
