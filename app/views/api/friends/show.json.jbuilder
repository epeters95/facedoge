json.extract! @friend, :id, :email, :created_at, :updated_at

json.in_friendships @friend.in_friendships do |in_friendship|
  json.extract! in_friendship, :id, :in_friend_id, :out_friend_id, :created_at, :updated_at
end

json.out_friendships @friend.out_friendships do |out_friendship|
  json.extract! out_friendship, :id, :in_friend_id, :out_friend_id, :created_at, :updated_at
end