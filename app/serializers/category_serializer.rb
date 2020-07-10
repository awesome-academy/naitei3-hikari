class CategorySerializer < ActiveModel::Serializer
  attributes :id, :title, :viewers, :picture
end
