class Following < ApplicationRecord
  belongs_to :follower, foreign_key: :follower_id, class_name: "User",
    inverse_of: :following
  belongs_to :followee, foreign_key: :followee_id, class_name: "User",
    inverse_of: :following
end
