require 'pry'

require_relative './painter.rb'
require_relative './painting.rb'
require_relative './gallery.rb'

raz = Painter.new("Raz", 1000)
matt = Painter.new("matt", 1000)
tim = Painter.new("Tim", 0)

met = Gallery.new("the met")
princes_lounge = Gallery.new("princes lounge")

raz_dope_painting = Painting.new("cat smoking", raz, met, 2000)
raz_other_painting = Painting.new('artist sleeping', raz, princes_lounge, 2018)
matts_fine_painting = Painting.new("butterfly, i guess", matt, met, 2001)
matts_terrible_painting = Painting.new("omg i can't stop painting butterflies", matt, met, 2018)
tims_painting = Painting.new("the seven seas", tim, princes_lounge, 2018)

binding.pry
puts "goodbye"
