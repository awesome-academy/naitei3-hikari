class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :dob, :picture, :stream_title,
             :stream_category

  def dob
    object.date_of_birth
  end

  def stream_title
    object.stream.nil? ? "" : object.stream.title
  end

  def stream_category
    return "" if object.stream.nil? || object.stream.categories.none?

    object.stream.categories.first.title
  end
end
