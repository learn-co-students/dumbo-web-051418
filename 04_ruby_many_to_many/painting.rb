class Painting
  attr_reader :year, :painter
  attr_accessor :title

  def initialize(title,painter,year)
    @title = title
    @painter = painter
    @year = year
  end

  def self.all
    @@all
  end
end
