json.extract! @user, :id, :email, :created_at, :updated_at

json.profile do
  json.extract! @user.profile, :id, :user_id, :first_name, :last_name, :bio, :name_tag, :created_at, :updated_at
end

json.in_friendships @user.in_friendships do |in_friendship|
  json.extract! in_friendship, :id, :in_friend_id, :out_friend_id, :created_at, :updated_at
end

json.out_friendships @user.out_friendships do |out_friendship|
  json.extract! out_friendship, :id, :in_friend_id, :out_friend_id, :created_at, :updated_at
end

json.posts @user.posts do |post|
  json.comments post.comments do |comment|
    json.extract! comment, :id, :user_id, :post_id, :body
  end
  json.extract! post, :id, :user_id, :body, :created_at, :updated_at
end

json.images @user.images do |image|
  json.extract! image, :id, :file_url, :user_id, :profile, :created_at, :updated_at
end