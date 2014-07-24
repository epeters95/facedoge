class Friendship < ActiveRecord::Base
  belongs_to :in_friend, class_name: "User", foreign_key: :in_friend_id
  belongs_to :out_friend, class_name: "User", foreign_key: :out_friend_id
  
  validates :in_friend_id, :out_friend_id, :presence => true
  validates :out_friend_id, :uniqueness => { :scope => :in_friend_id }
  
end
