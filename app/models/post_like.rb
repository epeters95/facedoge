class PostLike < ActiveRecord::Base
  belongs_to :user
  validates :post_id, :user_id, presence: true
  validates :post_id, uniqueness: { scope: :user_id }
end
