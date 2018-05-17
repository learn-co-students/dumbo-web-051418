class Shape
  # area, length, width, perimeter
  attr_reader :graph

  @@all = []

  def initialize(length, width)
    @length = length
    @width = width

    @@all << self
  end

  def plot(my_graph)
    @graph = my_graph
  end

  def self.all
    @@all
  end

  def area
    # Calculates area from attributes (length, width)
  end

  def perimeter
    # Calculates perimeter from attributes (length, width)
  end
end
