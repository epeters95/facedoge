class Profile < ActiveRecord::Base
  belongs_to :user
  
  validates :first_name, :last_name, :user_id, presence: true
  validates :user_id, uniqueness: true
  
end
