class Customer < ApplicationRecord
  has_many :purchases
  has_many :brews, through: :purchases

  validates :name, uniqueness: true, presence: true
end
