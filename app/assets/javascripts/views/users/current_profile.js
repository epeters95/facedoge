Facedoge.Views.CurrentProfile = Backbone.CompositeView.extend({
  template: JST["users/profile"],
  
  initialize: function() {
    this.currentUser = Facedoge.currentUser();
    this.listenTo(this.model.friendships(), 'remove', this.render);
    this.listenTo(Facedoge.currentUser().posts(), 'add', this.render);
    
    var that = this;
    this.currentUser.fetch({
      success: function() {
        var form = new Facedoge.Views.PostNew({
          model: that.currentUser,
          collection: that.currentUser.posts()
        });
        that.addSubview(".post-new", form);
      }
    });
  },
    
  render: function() {
    // only show current user posts (no wall posting yet)
    var that = this;
    _(this.currentUser.posts().models).each(function(post) {
      var postView = new Facedoge.Views.PostShow({
        model: post
      });
      that.addSubview(".posts", postView);
    });
    
    var content = this.template({
      user: Facedoge.currentUser()
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});