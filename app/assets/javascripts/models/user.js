Facedoge.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",
  
  // outgoing friend requests
  outFriendships: function() {
    if (!this._outFriendships) {
      this._outFriendships = new Facedoge.Collections.Friendships([], {
        out_friend_id: this.id
      });
    }
    
    return this._outFriendships;
  }
  
  // incoming friend requests
  inFriendships: function() {
    if (!this._inFriendships) {
      this._inFriendships = new Facedoge.Collections.Friendships([], {
        in_friend_id: this.id
      });
    }
    
    return this._inFriendships;
  }
    
});