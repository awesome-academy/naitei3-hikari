class Medium < ApplicationRecord
  belongs_to :category
  belongs_to :object, polymorphic: true
end
