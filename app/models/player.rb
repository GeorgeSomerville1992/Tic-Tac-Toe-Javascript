class Player < ActiveRecord::Base
  mount_uploader :player_one_picture, ImageUploader
  mount_uploader :player_two_picture, ImageUploader
end
