class AuthenticateUser
  prepend SimpleCommand

  def initialize username, password
    @username = username
    @password = password
  end

  def call
    @user = user
    token = JsonWebToken.encode(user_id: @user.id) if @user
    @user = ActiveModelSerializers::SerializableResource.new @user
    {user: @user, auth_token: token}
  end

  private

  attr_accessor :username, :password

  def user
    user = User.find_by username: username
    return user if user&.authenticate password

    errors.add :user_authentication, "invalid credentials"
  end
end
