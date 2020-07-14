class Api::V1::CategoriesController < ApplicationController
  skip_before_action :authenticate_request
  before_action :format_categories, only: :index
  before_action :load_category, only: :show

  def index
    render json: @format_categories
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

  def format_categories
    @format_categories = {}
    @categories = Category.lastest
    return if @categories.none?

    @categories.each do |category|
      @format_categories[category.title] =
        format_category(category, category.users)
    end
    @format_categories
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
