Facedoge.Collections.Friendships = Backbone.Collection.extend({
  url: "/api/friendships",
  
  model: Facedoge.Models.Friendship
  
  confirmedFriends: function(user) {
    var confirmed = [];
    var inFriendships = this.where({ in_friend_id = user.id });
    _(inFriendships).each(function(friendship) {
      match = this.findWhere({out_friend_id = friendship.out_friend_id})
      confirmed.concat(match);
    });
    return confirmed;
  }
});