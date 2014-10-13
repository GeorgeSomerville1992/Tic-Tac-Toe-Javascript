class AddColumnsToplayers < ActiveRecord::Migration
  def up
    add_column :players, :player_one_score, :string
  end
  def down
    remove_column :players, :player_one_score, :string
  end
end
