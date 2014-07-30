class Profile < ActiveRecord::Base
  belongs_to :user
  
  validates :first_name, :last_name, presence: true # user_id
  validates :user_id, uniqueness: true
  
end
