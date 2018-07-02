class User < ApplicationRecord
  has_secure_password
  # method that creates methods
    #authenticate
    #password
    #password=
      # HASHING&SALTING the password and
      # saving it in the password_digest column
    #password_confirmation
    #password_confirmation=

  validates :username, uniqueness: true
  validates :password, length: {minimum: 5}
end
