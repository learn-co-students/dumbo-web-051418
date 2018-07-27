class CreatePokemonTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :pokemon_types do |t|
      t.belongs_to :pokemon, foreign_key: true
      t.belongs_to :type, foreign_key: true

      t.timestamps
    end
  end
end
