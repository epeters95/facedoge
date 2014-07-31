Facedoge.Collections.PostLikes = Backbone.Collection.extend({
  url: "/api/post_likes",
  
  model: Facedoge.Models.PostLike,
  
  initialize: function(options) {
    this.post = options.post;
  }
});