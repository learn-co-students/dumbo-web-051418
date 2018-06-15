class Brew < ApplicationRecord
  has_many :purchases
  has_many :customers, through: :purchases

  validates :strength, numericality: {less_than_or_equal_to: 5, greater_than_or_equal_to: 1}

  def customer_name
  end

  def customer_name=(name)
    self.customers << Customer.find_or_create_by(name: name)
  end
end
