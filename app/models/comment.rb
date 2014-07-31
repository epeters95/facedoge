class Comment < ActiveRecord::Base
  belongs_to :post
  belongs_to :user
  has_many :comment_likes
  
  validates :body, :user_id, :post_id, presence: true
end
