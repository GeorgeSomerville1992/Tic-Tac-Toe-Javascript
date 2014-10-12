class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :player_one_name
      t.text :player_one_picture
      t.string :player_two_name
      t.text :player_two_picture

      t.timestamps
    end
  end
end
