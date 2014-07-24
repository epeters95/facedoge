Facedoge.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",
  
  model: Facedoge.Models.User
});