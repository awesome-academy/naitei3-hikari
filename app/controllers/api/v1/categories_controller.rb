class Api::V1::CategoriesController < ApplicationController
  skip_before_action :authenticate_request
  before_action :load_category, only: :show

  def index
    @categories = Category.lastest
  end

  def show; end

  private

  def load_category
    @category = Category.find_by title: params[:title]
    return unless @category

    @users = @category.users
    @category = format_category @category, @users
    render json: @category
  end

  def format_category category, users
    return category if users.none?

    result = nil
    users.each do |user|
      result = category.attributes.merge((user[:id]).to_s =>
        ActiveModelSerializers::SerializableResource.new(user))
    end
    result
  end
end
