class LocationTrainer
  attr_reader :location, :trainer
  @@all = []

  def initialize(location, trainer)
    @location = location
    @trainer = trainer
    @@all << self
  end

  def self.all
    @@all
  end

  def clients
    Client.all.select do |client|
      client.location_trainer == self
    end
  end

  def other_method
    "bananas"
  end

  def self.find_or_create(location, trainer)
    #look through every LocationTrainer and see if there is already a relationship between this location and this trainer
    found_lt = self.all.find do |lt|
      lt.location == location && lt.trainer == trainer
    end
    if found_lt
      found_lt
    else
      LocationTrainer.new(location, trainer)
    end

  end

end
