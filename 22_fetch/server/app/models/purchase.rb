class Purchase < ApplicationRecord
  belongs_to :customer
  belongs_to :brew

  def customer_name
    # if self.customer
    #   self.customer.name
    # end

    return self.customer.name if self.customer
  end

  def customer_name=(name)
    # find or create by name
    # associate with THIS purchase
    found_customer = Customer.find_or_create_by(name: name)
    self.customer = found_customer
  end

  # def brew_ids
  #   []
  # end
  #
  # def brew_ids=(ids)
  #   ids.compact.each do |id|
  #     # Purchase.new(customer: self.customer, brew_id: id)
  #   end
  # end
end










#
