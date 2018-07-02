class CreatePurchases < ActiveRecord::Migration[5.1]
  def change
    create_table :purchases do |t|
      t.integer :num_of_sugars
      t.string :creamer_strength
      t.boolean :iced
      t.string :special_instructions
      t.string :size
      t.integer :customer_id
      t.integer :brew_id

      t.timestamps
    end
  end
end
