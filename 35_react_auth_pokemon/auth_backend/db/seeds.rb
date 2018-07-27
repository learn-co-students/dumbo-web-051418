# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

resp = RestClient.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
json = JSON.parse(resp)

json["pokemon"].each do |pokemon|
  types = pokemon["type"].map do |type|
    Type.find_or_create_by(name: type)
  end
  p = Pokemon.create(name: pokemon["name"], img: pokemon["img"],
    height: pokemon["height"], weight: pokemon["weight"], types: types)
  puts "Created #{p.name}!"
end
