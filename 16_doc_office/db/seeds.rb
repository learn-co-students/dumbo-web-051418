# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'securerandom'

Patient.destroy_all
Doctor.destroy_all

10.times do
  Patient.create(name: Faker::Name.name_with_middle, age: SecureRandom.random_number(40))
  Doctor.create(name: "Dr #{Faker::Name.last_name}", specialty: Faker::Job.key_skill)
end

puts "Database Seeded"
