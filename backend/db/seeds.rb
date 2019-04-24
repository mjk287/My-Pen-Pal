# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Penpal.all.delete_all
User.all.delete_all

User.create(email: 'myung@myung.com', name: 'Myung Kim', password: '1234')
User.create(email: 'clyde@clyde.com', name: 'Clyde Kim', password: '1234')
User.create(email: 'clyde1@clyde1.com', name: 'Clyde1 Kim', password: '1234')

User.first.my_penpal = User.second

puts 'seeded!'
