Facedoge.Views.CommentLikeShow = Facedoge.Views.PostLikeShow.extend({
    
  newLike: function() {
    var like = this.like();
    if (!like) {
      like = new Facedoge.Models.CommentLike({
        comment_id: this.model.id,
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
  }

});