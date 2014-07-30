Facedoge.Collections.Images = Backbone.Collection.extend({
  url: "/api/images",
  
  model: Facedoge.Models.Image,
  
  initialize: function (models, options) {
    this.user = options.user
  }
});