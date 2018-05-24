require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

matts_basement = Location.new("matts basement", "it's a basement")
dumbo_gym = Location.new("access abs", "dumbo")

matt = Trainer.new("Matt", "bananas")
malorie = Trainer.new("Malorie", "existential crises")


matt_in_his_basement = LocationTrainer.new(matts_basement, matt)
matt_dumbo = LocationTrainer.new(dumbo_gym, matt)
malorie_dumbo = LocationTrainer.new(dumbo_gym, malorie)

tim = Client.new("Tim", malorie_dumbo)

binding.pry
puts "Goodbye"
