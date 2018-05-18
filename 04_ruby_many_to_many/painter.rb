class Painter

  attr_accessor :name
  attr_reader :dob

  @@all = []

  def initialize(name, dob)
    @name = name
    @dob = dob
    @@all << self
  end

  def self.all
    @@all
  end

  def paintings
    #returns an array of Painting instances related to this instance of painter
    Painting.all.select do |painting|
      painting.painter == self
    end
  end

  def galleries
    self.paintings.collect {|painting| painting.gallery}.uniq
  end

  def make_painting
    #takes a title, width, and height. It creates a new Painting instance, and adds it to the Painter's painting collection
  end

end
