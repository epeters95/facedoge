class User < ActiveRecord::Base
  validates :email, :session_token, presence: true
end
