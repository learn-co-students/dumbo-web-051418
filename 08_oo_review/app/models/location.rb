class Location

  attr_reader :name, :address
  @@all = []

  def initialize(name, address)
    @name = name
    @address = address
    @@all << self
  end

  def self.all
    @@all
  end

  def location_trainers
    #return an array of every instance of the LocationTrainer class associated with this location
    LocationTrainer.all.select do |location_trainer|
      location_trainer.location == self
    end
  end

  def trainers
    #return an array of every instance of the Trainer class associated with this location
    self.location_trainers.map do |lt|
      lt.trainer
    end
  end
end
