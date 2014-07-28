Facedoge.Collections.Comments = Backbone.Collection.extend({
  url: "/api/comments",
  
  model: Facedoge.Models.Comment,
  
  initialize: function(options) {
    this.post = options.post;
  }
});