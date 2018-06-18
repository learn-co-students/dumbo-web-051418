class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient

  # Make sure all fields have data
  validates :date, {presence: true}
  validates :doctor, {presence: true}
  validates :patient, {presence: true}
  validate :valid_date?

  # Check if the date is in the past?
  # Find the date of the date that this form is being accessed (aka today)
  # Find the date they are entering
  # Check if it is in the past
  def valid_date?
    # binding.pry

    unless Date.parse(date) >= Date.today
      errors.add(:date, "Cannot set date to be in the past")
    end

    if Date.parse(date) >= Date.today.next_day(7)
      errors.add(:date, "Cannot have more than a week in advance")
    end
  end
end
