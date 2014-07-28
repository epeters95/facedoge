Facedoge.Views.PostShow = Backbone.CompositeView.extend({
  template: JST["posts/show"],
  
  initialize: function() {
    this.listenTo(this.model.comments(), 'add', this.addCommentView);
    
    var user = this.model.collection.user;
    var userView = new Facedoge.Views.UserShow({ model: user });
    this.addSubview('.posting-user', userView);
    
    var that = this;
    //this.model.fetch({
    //  success: function() {
        var form = new Facedoge.Views.CommentNew({
          model: that.model
        });
        that.addSubview(".comment-new", form);
        that.render();
    //  }
    //});
  },
  
  addCommentView: function(comment) {
    var commentView = new Facedoge.Views.CommentShow({
      model: comment
    });
    this.addSubview('.comments', commentView);
  },
  
  render: function() {
    var that = this;
    if (this.subviews('.comments').length === 0) {
      _(this.model.comments().models).each(function(comment) {
        var commentView = new Facedoge.Views.CommentShow({
          model: comment
        });
        that.addSubview(".comments", commentView);
      });
    }
    
    var content = this.template({ post: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});