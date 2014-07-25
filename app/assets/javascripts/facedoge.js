window.Facedoge = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Facedoge.currentUser = Facedoge.Models.User.extend({ url: "api/current_user" });
    
    Facedoge.allUsers = new Facedoge.Collections.Users;
    Facedoge.allUsers.fetch();
    
    new Facedoge.Routers.AppRouter;
    Backbone.history.start();
  }
};

