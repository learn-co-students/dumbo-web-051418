class Painting
  attr_reader :year, :painter, :gallery
  attr_accessor :title

  @@all = []

  def initialize(title,painter, gallery,year)
    @title = title
    @painter = painter
    @gallery = gallery
    @year = year
    @@all << self
  end

  def self.all
    @@all
  end
end
