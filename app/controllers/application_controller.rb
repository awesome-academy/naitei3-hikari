require "stream-chat"

class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  private

  def initialize
    @client = StreamChat::Client.new(ENV["API_KEY"], ENV["API_SECRET"])
  end

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    return unless @current_user

    render json: {error: "Not Authorized"}, status: :unauthorized
  end
end
