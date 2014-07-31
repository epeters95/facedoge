Facedoge.Models.Comment = Backbone.Model.extend({
  urlRoot: "/api/comments",
  
  likes: function() {
    if (!this._comment_likes) {
      this._comment_likes = new Facedoge.Collections.CommentLikes([], {
        comment: this
      });
    }
    
    return this._comment_likes;
  }
});