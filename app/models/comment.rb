class Comment < ApplicationRecord
  belongs_to :object, polymorphic: true
  belongs_to :parent, class_name: "Comment",
    foreign_key: :parent_id, optional: true,
      inverse_of: :object
end
