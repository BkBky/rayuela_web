class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many :players_games
  has_many :games, through: :players_games

  validates :name, uniqueness: true
end
