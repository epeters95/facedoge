Facedoge.Views.CommentShow = Backbone.CompositeView.extend({
  template: JST["comments/show"],
  
  initialize: function() {
    var user = Facedoge.allUsers.get(this.model.get("user_id"));
    user.fetch();
    var userView = new Facedoge.Views.UserShow({ model: user });
    this.addSubview('.commenting-user', userView);
  },
  
  // TODO: both comments and posts use the same user show view, change later?
  render: function() {
    var content = this.template({ comment: this.model });
    if (this.subviews('.comment-like').length === 0) {
      var like = new Facedoge.Views.CommentLikeShow({
        model: this.model
      })
      this.addSubview(".comment-like", like);
    }
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});