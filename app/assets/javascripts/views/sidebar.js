Facedoge.Views.Sidebar = Backbone.CompositeView.extend({  
  initialize: function() {
    this.currentUser;
    
    var that = this;
    Facedoge.allUsers.fetch({ success: function() {
       that.currentUser = Facedoge.currentUser();
       that.listenTo(that.currentUser, 'sync', that.render);
    }});
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
        var friendView = new Facedoge.Views.UserShow({
          model: user
        });
        that.addSubview('.friend-items', friendView);
      }
    });
  },
  
  render: function() {
    this.$el.html('');
    if (this.currentUser) {
      this.addFriendViews();
    }
    
    this.$el.append($('<li class="item"></li>'));
    
    var view = this;
    _(this.subviews('.friend-items')).each(function (subview) {
      var content = subview.render().$el;
      content.insertAfter('.item');
    });
    return this;
  }
});