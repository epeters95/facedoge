class CommentLike < ActiveRecord::Base
  belongs_to :user
  validates :comment_id, :user_id, presence: true
  validates :comment_id, uniqueness: { scope: :user_id }
end
