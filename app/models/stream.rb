class Stream < ApplicationRecord
  belongs_to :user
  has_many :media, as: :object, dependent: :destroy
  has_many :categories, through: :media, dependent: :destroy
  has_many :comments, as: :object, dependent: :destroy
end
