class CreatePurchases < ActiveRecord::Migration[5.1]
  def change
    create_table :purchases do |t|
      t.references :customer, foreign_key: true
      t.references :brew, foreign_key: true
    end
  end
end
