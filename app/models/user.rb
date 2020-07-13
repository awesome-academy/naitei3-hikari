class User < ApplicationRecord
  has_one :stream, dependent: :destroy
  has_many :media, as: :object, dependent: :destroy
  has_many :categories, through: :media, dependent: :destroy
  has_many :comments, as: :object, dependent: :destroy
  has_many :followees, foreign_key: :followee_id,
    class_name: "Following", dependent: :destroy, inverse_of: :users
  has_many :followers, through: :followees,
    source: :follower, dependent: :destroy
  has_secure_password
  scope :lastest, ->{where("picture != 'NULL'").order(created_at: 'DESC')}
end
