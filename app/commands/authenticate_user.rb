class AuthenticateUser
  prepend SimpleCommand
  def initialize username, password, client
    @username = username
    @password = password
    @client = client
  end

  def call
    @user = user
    token = JsonWebToken.encode(user_id: @user.id) if @user
    @chat_token = @client.create_token @user.id.to_s
    @user = ActiveModelSerializers::SerializableResource.new @user
    {user: @user, auth_token: token, chat_token: @chat_token}
  end

  private

  attr_accessor :username, :password

  def user
    user = User.find_by username: username
    return user if user&.authenticate password

    errors.add :user_authentication, "invalid credentials"
  end
end
