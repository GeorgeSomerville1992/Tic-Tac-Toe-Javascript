class AddPlayerTwoColumnsToplayers < ActiveRecord::Migration
  def up
    add_column :players, :player_two_score, :string
  end
  def down
    remove_column :players, :player_two_score, :string
  end
end
