require 'byebug'

class Animal
  attr_accessor :name, :sound

  def initialize(name)
    @name = name
  end

  def alive
    self
    'probably'
  end
end


class Cat < Animal
  def initialize(name)
    super
    @sound = 'meow'
  end

  def self.all
    self
  end
end


samson = Cat.new('samson')
samson.alive

animal.new('barney').alive


Cat.all
Animal.all






byebug
puts 'fin'