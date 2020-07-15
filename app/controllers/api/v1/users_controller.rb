class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request
  before_action :load_user, only: :show
  before_action :convert_to_date_of_birth, :sign_up, only: :create
  def index
    @users = User.lastest
    render json: @users
  end

  def show
    render json: @user
  end

  def create; end
  private

  def sign_up
    @user = User.new user_params
    @user.build_stream.key = SecureRandom.hex(20)
    @user.update date_of_birth: @date
    return unless @user

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def convert_to_date_of_birth
    day = params[:user][:day]
    month = params[:user][:month]
    year = params[:user][:year]
    @date = (day + month + year).to_s.to_date
  end

  def load_user
    @user = User.find_by username: params[:username]
    return unless @user
  end

  def user_params
    params.require(:user).permit :id, :username, :email, :password,
                                 :date_of_birth
  end
end
