class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :badge_count, default: 0
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
