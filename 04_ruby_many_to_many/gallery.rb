#   * should initialize with a name

#   * a reader method for name

class Gallery
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def paintings
    #* `#paintings` that returns an array of Painting instances related to this instance of gallery
  end

  def painters
    #* `#painters` that returns an array of Painter instances related to this instance of gallery
  end

end
