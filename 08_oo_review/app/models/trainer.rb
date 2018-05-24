class Trainer

  attr_reader :name, :specialty
  @@all = []

  def initialize(name, specialty)
    @name = name
    @specialty = specialty
    @@all << self
  end

  def self.all
    @@all
  end

  def location_trainers
    LocationTrainer.all.select do |lt|
      lt.trainer == self
    end
  end

  def locations
    self.location_trainers.map do |lt|
      lt.location
    end
  end

  def clients
    Client.all.select do |client|
      client.trainer == self
    end

    # self.location_trainers.map do |location_trainer|
    #   location_trainer.clients
    # end.flatten
  end

end
