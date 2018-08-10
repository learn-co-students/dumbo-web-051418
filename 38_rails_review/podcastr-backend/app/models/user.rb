class User < ApplicationRecord
  has_many :favorites
  has_many :podcasts, through: :favorites

  validates :username, uniqueness: true
  has_secure_password

  def formatted
    {
      user: self,
      favorited: self.podcasts
    }
  end

end
