class Api::V1::VideosController < ApplicationController
  before_action :set_video, only: [:show, :update, :destroy]

  def index
    @videos = Video.all
    render json: @videos
  end

  def show
    render json: @video
  end

  def create
    @video = Video.new video_params
    if @video.save
      render json: @video, status: :created, location: @video
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  def update
    if @video.update video_params
      render json: @video
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @video.destroy
  end

  private

  def set_video
    @video = Video.find_by params[:id]
  end

  def video_params
    params.fetch :video, {}
  end
end
