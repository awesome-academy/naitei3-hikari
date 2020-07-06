class Api::V1::UsersController < ApplicationController
  before_action :load_user, only: :show

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  private

  def load_user
    @user = User.find_by id: params[:id]
  end

  def user_params
    params.fetch :user, {}
  end
end
