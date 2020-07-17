module FollowsHelper
  def check_for_display_follow follow, on_user_id, users_info,
    users_info_for_channel
    if follow == "followee"
      follows = Following.find_followee on_user_id
      return if follows.none?

      get_users_info follows, users_info, true
      get_users_info_for_channel on_user_id, users_info_for_channel
    else
      follows = Following.find_follower on_user_id
      return if follows.none?

      get_users_info follows, users_info, false
    end
  end

  def get_users_info follows, users_info, is_followee
    follows.each do |following|
      user_id = is_followee ? following.follower_id : following.followee_id
      break unless user_id

      data = init_user user_id
      break if data.empty?

      users_info[user_id] = data
    end
  end

  def get_users_info_for_channel on_user_id, users_info_for_channel
    follows = Following.find_follower on_user_id
    return if follows.none?

    follows.each do |following|
      user_id = following.followee_id
      break unless user_id

      data = init_user user_id
      break if data.empty?

      users_info_for_channel[user_id] = data
    end
  end

  def init_user user_id
    user = User.find_by(id: user_id)
    return unless user

    username = user.username
    picture = url_for(user.picture)
    {username: username, picture: picture}
  end

  def handling_creating_follow follow
    if follow.save
      follower = User.find_following follow.follower_id
      followee = User.find_following follow.followee_id
      return unless follower && followee

      rendering_follow_for_creating follow, follower, followee
    else
      flash[:errors] = follow.errors.full_messages
      render json: {errors: flash[:errors]}, status: :unprocessable_entity
    end
  end

  def rendering_follow_for_creating follow, follower, followee
    render json: {follow: follow,
                  follower: {
                    id: follower.id,
                    username: follower.username,
                    picture: url_for(follower.picture)
                  },
                  followee: {
                    id: followee.id,
                    username: followee.username,
                    picture: url_for(followee.picture)
                  }}
  end
end
