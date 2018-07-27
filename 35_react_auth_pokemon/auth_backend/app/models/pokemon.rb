class Pokemon < ApplicationRecord
  has_many :pokemon_types
  has_many :types, through: :pokemon_types

  has_many :user_pokemons
  has_many :users, through: :user_pokemons
end
