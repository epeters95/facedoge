Facedoge.Models.Friend = Backbone.Model.extend({
  urlRoot: "/api/friends",
  
  // all friendships associated with user
  friendships: function() {
    if (!this._friendships) {
      this._friendships = new Facedoge.Collections.Friendships([], {
        friend: this
      });
    }
  },
  
  // all connected friendships
  connectedFriendships: function() {
    var confirmed = [];
    var inFriendships = this.friendships.where({ in_friend_id: this.id });
    
    _(inFriendships).each(function(friendship) {
      var match = this.friendships.findWhere({
        in_friend_id: friendship.out_friend_id
      });
      confirmed.concat(match);
    });
    
    return confirmed;
  }
});