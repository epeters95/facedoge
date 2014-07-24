Facedoge.Models.Friend = Backbone.Model.extend({
  urlRoot: "/api/friends",
  
  // all friendships associated with user
  friendships: function() {
    if (!this._friendships) {
      this._friendships = new Facedoge.Collections.Friendships([], {
        friend: this
      });
    }
    
    return this._friendships;
  },
  
  // all connected friendships
  connectedFriendIds: function() {
    
    var confirmed = [];
    var inFriendships = this.friendships().where({ in_friend_id: this.id });
    var user = this;
    _(inFriendships).each(function(friendship) {
      var match = user.friendships().findWhere({
        in_friend_id: friendship.get("out_friend_id")
      });
      confirmed.push(match.get("in_friend_id"));
    });
    
    return confirmed;
  },
  
  // friendships are nested, avoid separate route
  parse: function(response) {
    // for now, join in_friendships and out_friendships into single collection...
    // possible loss of specificity
    var friendships = [];
    if (response.in_friendships) {
      friendships = friendships.concat(response.in_friendships);
      delete response.in_friendships;
    }
    if (response.out_friendships) {
      friendships = friendships.concat(response.out_friendships);
      delete response.out_friendships;
    }
    this.friendships().set(friendships);
    return response;
  }
});