class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner, default: 0
    end
  end
end
