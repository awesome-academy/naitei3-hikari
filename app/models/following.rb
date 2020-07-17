class Following < ApplicationRecord
  belongs_to :follower, foreign_key: :follower_id,
    class_name: "User", inverse_of: :followees
  belongs_to :followee, foreign_key: :followee_id,
    class_name: "User", inverse_of: :followers
  scope :find_follower, ->(follower_id){where(follower_id: follower_id)}
  scope :find_followee, ->(followee_id){where(followee_id: followee_id)}
  scope :find_relation, (lambda do |followee_id, follower_id|
    where(followee_id: followee_id)
    .where(follower_id: follower_id)
  end)
end
