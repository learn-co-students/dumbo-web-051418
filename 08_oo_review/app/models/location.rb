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

  def clients
    self.location_trainers.map do |lt|
      lt.clients
    end.flatten
  end

  def self.most_clients
    # returns the location that has the least number of clients

    
    # .min_by on the self.all method
    # count up how many clients a location has



    self.all.min_by do |location|
      #how many clients does a location have
    end
  end
end
