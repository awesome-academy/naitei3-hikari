class Api::V1::FollowingController < ApplicationController
  include FollowsHelper
  skip_before_action :authenticate_request
  before_action :load_follow, only: :show
  before_action :check_for_creating_follow, only: :create
  before_action :check_for_destroy, only: :destroy

  def show; end

  def create; end

  def destroy; end

  private

  def load_follow
    follow = params[:user][:follow] if params[:user][:follow]
    users_info = {}
    users_info_for_channel = {}
    on_user_id = params[:user][:id] if params[:user][:id]
    check_for_display_follow follow, on_user_id, users_info,
                             users_info_for_channel
    render json: {users_info: users_info,
                  users_info_for_channel: users_info_for_channel,
                  get_request: follow}
  end

  def check_for_creating_follow
    @follow = Following.new(follow_params)
    handling_creating_follow @follow
  end

  def check_for_destroy
    params = follow_params
    return unless params[:followee_id] || params[:follower_id]

    @follow = Following.find_relation params[:followee_id], params[:follower_id]
    return unless @follow

    if Following.destroy(@follow[0].id)
      render json: @follow[0]
    else
      render json: @follow.errors, status: :unprocessable_entity
    end
  end

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
