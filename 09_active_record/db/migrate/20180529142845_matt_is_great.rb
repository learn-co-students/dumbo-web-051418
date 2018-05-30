class MattIsGreat < ActiveRecord::Migration[5.2]
  def change
    create_table(:bodegas) do |t|
      t.string :name
      t.string :address
      t.boolean :has_alcohol?
    end
  end
end
