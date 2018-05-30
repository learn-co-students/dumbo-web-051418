class CreateBeverages < ActiveRecord::Migration[5.2]
  def change
    create_table(:beverages) do |t|
      t.string(:name)
      t.string :person
      t.float :price
      t.boolean :is_cold
    end
  end
end
