class Category < ApplicationRecord
  has_many :media, dependent: :destroy
  has_many :videos, through: :media, source: :object,
    source_type: "Video", dependent: :destroy
  has_many :streams, through: :media, source: :object,
    source_type: "Stream", dependent: :destroy
  has_many :users, through: :media, source: :object,
    source_type: "User", dependent: :destroy
end
