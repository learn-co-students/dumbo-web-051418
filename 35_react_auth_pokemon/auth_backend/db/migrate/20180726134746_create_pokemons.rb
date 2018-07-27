class CreatePokemons < ActiveRecord::Migration[5.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :img
      t.string :height
      t.string :weight

      t.timestamps
    end
  end
end
