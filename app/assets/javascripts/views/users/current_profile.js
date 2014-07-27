Facedoge.Views.CurrentProfile = Backbone.CompositeView.extend({
  template: JST["users/profile"],
  
  initialize: function() {
    this.currentUser = Facedoge.currentUser();
    this.listenTo(this.currentUser.friendships(), 'remove', this.render);
    this.listenTo(this.currentUser.posts(), 'add', this.addPostView);
    
    var that = this;
    this.currentUser.fetch({
      success: function() {
        var form = new Facedoge.Views.PostNew({
          model: that.currentUser,
          collection: that.currentUser.posts()
        });
        that.addSubview(".post-new", form);
        that.render();
      }
    });
  },
  
  addPostView: function(post) {
    var postView = new Facedoge.Views.PostShow({
      model: post
    });
    this.addSubview('.posts', postView);
  },
    
  render: function() {
    // only show current user posts (no wall posting yet)
    // var that = this;
    // console.log('rende)')
    var that = this;
    if (this.subviews('.posts').length === 0) {
      _(this.currentUser.posts().models).each(function(post) {
        var postView = new Facedoge.Views.PostShow({
          model: post
        });
        that.addSubview(".posts", postView);
      });
    }
    
    var content = this.template({
      user: Facedoge.currentUser()
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});