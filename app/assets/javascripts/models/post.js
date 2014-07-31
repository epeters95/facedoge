Facedoge.Models.Post = Backbone.Model.extend({
  urlRoot: "/api/posts",
  
  comments: function() {
    if (!this._comments) {
      this._comments = new Facedoge.Collections.Comments([], {
        post: this
      });
    }
    
    return this._comments;
  },
  
  likes: function() {
    if (!this._post_likes) {
      this._post_likes = new Facedoge.Collections.PostLikes([], {
        post: this
      });
    }
    
    return this._post_likes;
  }
});