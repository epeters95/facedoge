Facedoge.Views.Sidebar = Backbone.CompositeView.extend({
  template: JST["sidebar"],
  
  initialize: function() {
    this.currentUser;
    
    var that = this;
    Facedoge.allUsers.fetch({ success: function() {
       that.currentUser = Facedoge.currentUser();
       that.listenTo(that.currentUser, 'sync', that.render);
       that.listenTo(that.currentUser.friendships(), 'add', that.addEvent);
       that.listenTo(that.currentUser.friendships(), 'remove', that.removeEvent);
    }});
  },
  
  addEvent: function(friendship) {
    var friendView;
    var that = this;
    _(this.subviews('.request-items')).each(function(view) {
      if (view.model.id === friendship.get("out_friend_id") ||
          view.model.id === friendship.get("in_friend_id"))
      { friendView = view }
    });
    if (friendView) { this.removeSubview('.request-items', friendView) }
  },
  
  removeEvent: function(friendship) {
    if (Backbone.history.fragment === 'users/' + this.currentUser.id) {
      return;
    }
    var friendView;
    var that = this;
    _(this.subviews('.friend-items')).each(function(view) {
      if (view.model.id === friendship.get("out_friend_id") ||
          view.model.id === friendship.get("in_friend_id"))
      { friendView = view }
    });
    if (friendView) { this.removeSubview('.friend-items', friendView); }
    _(this.subviews('.request-items')).each(function(view) {
      if (view.model.id === friendship.get("out_friend_id") ||
          view.model.id === friendship.get("in_friend_id"))
      { friendView = view }
    });
    if (friendView) { this.removeSubview('.request-items', friendView) }
    this.render();
  },
  
  addFriendViews: function() {
    var that = this;
    _(this.currentUser.connectedFriendIds()).each(function(friendId) {

      var user = Facedoge.allUsers.get(friendId);
      var exists = false;
      _(that.subviews('.friend-items')).each(function(view) {
        if (view.model.id === friendId) { exists = true }
      });
      if (!exists) {
        user.fetch();
        var friendView = new Facedoge.Views.UserShow({
          model: user
        });
        that.addSubview('.friend-items', friendView);
      }
    });
  },
  
  addRequestViews: function() {
    var requests = this.currentUser.friendships().where({
      in_friend_id: this.currentUser.id
    });
    var that = this;
    _(requests).each(function(request) {
      var user = Facedoge.allUsers.get(request.get("out_friend_id"));
      if (!that.currentUser.isFriendsWith(user)) {
        var exists = false;
        _(that.subviews('.request-items')).each(function(view) {
          if (view.model.id === request.get("out_friend_id")) { exists = true }
        });
        if (!exists) {
          user.fetch();
          var requestView = new Facedoge.Views.UserShow({
            model: user
          });
          that.addSubview('.request-items', requestView);
        }
      }
    })
  },
  
  render: function() {
    this.$el.html('');
    if (this.currentUser) {
      this.addFriendViews();
      this.addRequestViews();
    }
    this.$el.html(this.template());
    this.attachSubviews();
    // this.$el.append($('<li class="item"></li>'));
    //
    // var view = this;
    // _(this.subviews('.friend-items')).each(function (subview) {
    //   var content = subview.render().$el;
    //   content.insertAfter('.item');
    // });
    return this;
  }
});