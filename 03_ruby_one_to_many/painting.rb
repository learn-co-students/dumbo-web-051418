class Painting
  attr_accessor :title
  attr_reader :width, :height

  # **QUIZ** What is this?
  @@all = []

  # Remember these are the required fields
  # for a Painting. We are going to have the
  # painting **BELONG TO** a painter by having
  # an attribute called @painter that will take
  # an instance of Painter
  def initialize(title, width, height, painter)
    @title = title
    @width = width
    @height = height
    @painter = painter

    # **QUIZ** What are we doing here?
    @@all << self
  end

  def painter
    @painter
  end

  def painter_name
    self.painter.name
  end

  # This allows us to expose our @@all to other
  # classes. This only let's **READ**. 
  def self.all
    @@all
  end
end
