Facedoge.Collections.CommentLikes = Backbone.Collection.extend({
  url: "/api/comment_likes",
  
  model: Facedoge.Models.CommentLike,
  
  initialize: function(options) {
    this.comment = options.comment;
  }
});