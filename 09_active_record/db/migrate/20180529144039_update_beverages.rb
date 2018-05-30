class UpdateBeverages < ActiveRecord::Migration[5.2]
  def change
    add_column :beverages, :bodega_id, :integer
  end
end
