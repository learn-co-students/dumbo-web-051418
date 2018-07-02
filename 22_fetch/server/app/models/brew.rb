class Brew < ApplicationRecord
  has_many :purchases
  has_many :customers, through: :purchases
  validates :strength, inclusion: { in: (1..5) }

  def self.strongest
    Brew.where(strength: Brew.maximum('strength'))
  end
end
