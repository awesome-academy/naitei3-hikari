class User < ApplicationRecord
  acts_as_paranoid
  enum role: {user: 0, admin: 1}
  has_one :stream, dependent: :destroy
  has_many :media, as: :object, dependent: :destroy
  has_many :categories, through: :media, dependent: :destroy
  has_many :comments, as: :object, dependent: :destroy
  has_many :followees, foreign_key: :followee_id,
    class_name: "Following", dependent: :destroy, inverse_of: :follower
  has_many :followers, through: :followees,
    source: :follower, dependent: :destroy
  has_secure_password
  scope :lastest, ->{order created_at: :desc}
  validates :username, uniqueness: true

  def self.find_following id
    find_by id: id
  end
end
