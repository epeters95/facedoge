class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :file_url, null: false
      t.integer :user_id, null: false
      t.boolean :profile

      t.timestamps
    end
    add_index :images, :user_id
  end
end
