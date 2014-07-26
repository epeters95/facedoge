Facedoge.Routers.AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('.content');
  },
  
  routes: {
    "" : "feedShow",
    "users/all" : "usersIndex",
    "users/:id" : "userProfile"
  },

  feedShow: function() {
    var feed = new Facedoge.Views.Feed();
    this.$rootEl.html(feed.render().$el);
  },
  
  usersIndex: function() {
    var index = new Facedoge.Views.Index();
    this.$rootEl.html(index.render().$el);
  },
  
  userProfile: function(id) {    
    var user;
    var router = this;
    Facedoge.allUsers.fetch({
      success: function() {
        user = Facedoge.allUsers.get(id);
        var profile;
        if (user.id === Facedoge.currentUser.id) {
          profile = new Facedoge.Views.CurrentProfile();
        } else {
          profile = new Facedoge.Views.UserProfile({ model: user });
        }
        router.$rootEl.html(profile.render().$el);
      }
    });
  }
  
});