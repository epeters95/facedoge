Facedoge.Views.Feed = Backbone.CompositeView.extend({
  template: JST["feed"],
  
  events: {},
  
  initialize: function() {
    this.user;
    var that = this;
    Facedoge.allUsers.fetch({ success: function() {
      that.addPosts();
    }});
    
    this.posts = new Facedoge.Collections.FriendPosts([], {
      user: this.user
    });
    
    this.listenTo(this.posts, 'add', this.render);
  },
  
  addPosts: function() {
    this.user = Facedoge.currentUser();
    var that = this;
    
    this.user.fetch({ success: function() {
      _(that.user.connectedFriendIds()).each(function(friendId) {
        var user = Facedoge.allUsers.get(friendId);
        if (user) {
          user.fetch({ success: function() {
            _(user.posts().models).each(function(post) {
              that.posts.add(post);
            });
          }});
        }
        
      });
    }});
    
  },
  
  removeSubviews: function() {
    var that = this;
    while (this.subviews('.posts').length > 0) {
      _(this.subviews('.posts')).each(function(view) {
        that.removeSubview('.posts', view);
      });
    }
  },
  
  addSubviews: function() {
    var that = this;
    var posts = _.sortBy(this.posts.models, function(post) {
      return new Date(post.get("created_at")).getTime() * -1;
    });
    _(posts).each(function(post) {
      var postView = new Facedoge.Views.PostShow({
        model: post
      });
      that.addSubview('.posts', postView);
    });
  },
  
  render: function() {
    // TODO: pretty inefficient
    this.removeSubviews();
    this.addSubviews();
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});