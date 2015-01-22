Facedoge.Views.PostLikeShow = Backbone.View.extend({
  template: JST["like_show"],
  
  initialize: function() {
    this.listenTo(Facedoge.allUsers, 'sync', this.render);
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
    var length = this.model.likes().models.length;
    var username = "";
    var that = this;

    if (length === 1) {
      var user = Facedoge.allUsers.findWhere({
        id: this.model.likes().models[0].get("user_id")
      });
      
      if (user.profile()) {
        username = user.profile().first_name + " " + user.profile().last_name;
      } else { 
        user.fetch({
          success: function() {
            username = user.profile().first_name + " " + user.profile().last_name;
            var content = that.template({
              doesLike: that.like(),
              numLikes: length,
              name: username
            });
            that.$el.html(content);
            return that;
          }
        });
      }
    }
    var content = this.template({
      doesLike: this.like(),
      numLikes: length,
      name: username
    });
    this.$el.html(content);
    return this;
  }
});