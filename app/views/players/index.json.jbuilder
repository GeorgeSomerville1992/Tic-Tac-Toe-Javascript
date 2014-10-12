json.array!(@players) do |player|
  json.extract! player, :id, :player_one_name, :player_one_picture, :player_two_name, :player_two_picture
  json.url player_url(player, format: :json)
end
