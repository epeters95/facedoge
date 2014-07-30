class Image < ActiveRecord::Base
  belongs_to :user
  validates :file_url, :user_id, presence: true  
end
