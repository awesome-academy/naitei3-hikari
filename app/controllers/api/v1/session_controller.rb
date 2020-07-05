class Api::V1::SessionController < ApplicationController
  skip_before_action :authenticate_request

  def sign_in
    command = AuthenticateUser.call(params[:user][:username],
                                    params[:user][:password])
    if command.success?
      render json: {user: command.result}
    else
      render json: {error: command.errors}, status: :unauthorized
    end
  end

  def current_logged_in_user
    command = AuthorizeApiRequest.call request.headers
    if command.success?
      render json: {current_user: command.result}
    else
      render json: {error: command.errors}, status: :unauthorized
    end
  end
end
