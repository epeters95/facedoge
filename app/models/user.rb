class User < ActiveRecord::Base
  attr_reader :password
  
  validates :email, :password_digest, :session_token, presence: true
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
  
  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
