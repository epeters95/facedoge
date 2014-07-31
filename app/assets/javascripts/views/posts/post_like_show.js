Facedoge.Views.PostLikeShow = Backbone.View.extend({
  template: JST["like_show"],
  
  initialize: function() {
    this.post = this.model;
  },
  
  events: {
    "click span.glyphicon-thumbs-up" : "newLike",
    "click a.unlike" : "unLike"
  },
  
  like: function() {
    return this.model.likes().findWhere({ user_id: Facedoge.currentUser().id });
  },
  
  newLike: function() {
    var like = this.like();
    if (!like) {
      like = new Facedoge.Models.PostLike({
        post_id: this.model.id,
        user_id: Facedoge.currentUser().id
      });
      var that = this;
      like.save({}, {
        success: function() {
          that.model.likes().add(like);
          that.render();
        }
      });
    } else {
      like.destroy();
    }
  },
  
  unLike: function() {
    var that = this;
    this.model.likes().findWhere({ user_id: Facedoge.currentUser().id }).destroy({
      success: function() { that.render(); }
    });
  },
  
  render: function() {
    var content = this.template({
      doesLike: this.like(),
      numLikes: this.model.likes().models.length
    });
    this.$el.html(content);
    return this;
  }
});