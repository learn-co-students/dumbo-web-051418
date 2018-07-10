class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :priority
      t.integer :list_id

      t.timestamps
    end
  end
end
