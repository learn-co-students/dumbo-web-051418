# Attribute accessors
class Graph
  attr_accessor :x_bound, :y_bound

  def initialize(x, y)
    @x_bound = x
    @y_bound = y
  end

  def add_shape(new_shape)
    new_shape.plot(self)
    # Adding a shape that exists to my graph
  end

  def shapes
    Shape.all.select do |shape|
      shape.graph == self
    end
  end
end
