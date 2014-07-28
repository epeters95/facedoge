class User < ActiveRecord::Base
  attr_reader :password
  
  has_one :profile
  has_many :out_friendships, class_name: "Friendship", foreign_key: :out_friend_id
  has_many :in_friendships, class_name: "Friendship", foreign_key: :in_friend_id
  has_many :posts
  has_many :comments
  
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  # TODO: fix broken length check
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  
  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
  
  def password=(secret)
    self.password_digest = BCrypt::Password.create(secret)
  end
  
  def is_password?(secret)
    BCrypt::Password.new(self.password_digest).is_password?(secret)
  end
  
  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end
  
  def friendRequests
    users = []
    self.in_friendships.each do |in_friendship|
      user = User.find(in_friendship.out_friend_id)
      users << user unless self.connectedFriends.include?(user)
    end
    users
  end
  
  def connectedFriends
    users = []
    self.out_friendships.each do |out_friendship|
      match = self.in_friendships.select do |in_friendship|
        out_friendship.in_friend_id == in_friendship.out_friend_id
      end.first
      users << User.find(match.out_friend_id) if match
    end
    users
  end
  
  def sentRequests
    users = []
    self.out_friendships.each do |out_friendship|
      user = User.find(out_friendship.in_friend_id)
      users << user unless self.connectedFriends.include?(user)
    end
    users
  end
  
  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
