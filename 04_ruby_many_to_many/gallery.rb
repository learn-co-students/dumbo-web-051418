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
    Painting.all.select {|painting| painting.gallery == self}
  end

  def painters
    #* `#painters` that returns an array of Painter instances related to this instance of gallery
    self.paintings.map {|painting| painting.painter}.uniq
  end

end
