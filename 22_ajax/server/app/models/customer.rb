class Customer < ApplicationRecord
  has_many :purchases
  has_many :brews, through: :purchases
end
