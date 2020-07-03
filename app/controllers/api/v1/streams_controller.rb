class Api::V1::StreamsController < ApplicationController
  before_action :set_stream, only: [:show, :update, :destroy]

  def index
    @streams = Stream.all

    render json: @streams
  end

  def show
    render json: @stream
  end

  def create
    @stream = Stream.new stream_params

    if @stream.save
      render json: @stream, status: :created, location: @stream
    else
      render json: @stream.errors, status: :unprocessable_entity
    end
  end

  def update
    if @stream.update stream_params
      render json: @stream
    else
      render json: @stream.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @stream.destroy
  end

  private

  def set_stream
    @stream = Stream.find_by params[:id]
  end

  def stream_params
    params.fetch :stream, {}
  end
end
