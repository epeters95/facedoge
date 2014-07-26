window.Facedoge = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // Facedoge.currentUser = Facedoge.Models.User.extend({ url: "api/current_user" });
    
    Facedoge.allUsers = new Facedoge.Collections.Users;
    Facedoge.allUsers.fetch();
    
    $.cookie.raw = true;
    Facedoge.currentUser = function () {
      var token = $.cookie('facedoge_session_token');
      return Facedoge.allUsers.findWhere({
        session_token: token
      });
    }

    new Facedoge.Routers.AppRouter;
    Backbone.history.start();
  }
};

