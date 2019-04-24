# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.all.delete_all
Penpal.all.delete_all
User.all.delete_all

User.create(email: 'myung@myung.com', name: 'Myung Kim', password: '1234')
User.create(email: 'clyde@clyde.com', name: 'Clyde Kim', password: '1234')
User.create(email: 'clyde1@clyde1.com', name: 'Clyde1 Kim', password: '1234')

User.first.my_penpal = User.second

Post.create(title: 'Big Fish', content: 'The novel Moby Dick by Herman Melville is an epic tale of the voyage of the whaling ship the Pequod and its captain, Ahab, who relentlessly pursues the great Sperm Whale (the title character) during a journey around the world.', user_id: User.first.id)
Post.create(title: 'Clover', content: 'Found a four leaf clover today. feeling lucky!', user_id: User.second.id)
Post.create(title: 'Bonnie and Clyde', content: 'This movie was great you should watch it!', user_id: User.third.id)

puts 'seeded!'
