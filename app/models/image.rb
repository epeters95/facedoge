class Image < ActiveRecord::Base
  attr_accessible :file_url
  belongs_to :user
  validates :file_url, presence: true  
end
