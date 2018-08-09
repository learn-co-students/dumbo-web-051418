class Client

  attr_reader :name
  attr_accessor :location_trainer
  @@all = []

  def initialize(name, location_trainer)
    @name = name
    @location_trainer = location_trainer
    @@all << self
  end

  def self.all
    @@all
  end

  def trainer
    self.location_trainer.trainer
  end

  def location
    self.location_trainer.location
  end

  def reassign_trainer(new_trainer)
    # should take a trainer as argument and assign it to the client
    # some_new_location_trainer => uses the correct location and trainer
    # self.location_trainer = some_new_location_trainer

    # find the location associated with this client

    # find or create a location trainer with those two (location and trainer)


    self.location_trainer = LocationTrainer.find_or_create(self.location, new_trainer)
  end


end
