class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request
  before_action :load_user, only: %w(show destroy)
  before_action :check_for_destroy, only: :destroy
  before_action :convert_to_date_of_birth, :check_for_create, only: :create
  def index
    @users = User.lastest
    render json: @users
  end

  def show
    render json: @user
  end

  def destroy; end

  def create; end
  private

  def check_for_destroy
    if @user.destroy
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def check_for_create
    @user = User.new user_params
    @user.build_stream.key = SecureRandom.hex(20)
    @user.date_of_birth = @date if @date
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
    return unless day && month && year

    @date = (day + month + year).to_s.to_date
  end

  def load_user
    @user = User.find_by id: params[:id] if params[:id]
    return if @user

    @user = User.find_by username: params[:username] if params[:username]
    return if @user

    render json: "user is nil", status: :not_found
  end

  def user_params
    params.require(:user).permit :id, :username, :email, :password,
                                 :date_of_birth, :role
  end
end
