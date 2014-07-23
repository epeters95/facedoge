class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :in_friend_id, null: false
      t.integer :out_friend_id, null: false
      
      t.timestamps
    end
  end
end
