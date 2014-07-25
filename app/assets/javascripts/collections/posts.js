Facedoge.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",
  
  model: Facedoge.Models.Post,
  
  initialize: function (models, options) {
    this.user = options.user
  }
});