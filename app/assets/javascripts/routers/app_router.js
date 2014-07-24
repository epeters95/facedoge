Facedoge.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "" : "showFeed"
    // ""
  },

  showFeed: function() {
    var feed = new Facedoge.Views.Index({
      // TODO: composite view
      // model: not needed
      // collection: will need friendships, recent posts
    });
    this.$rootEl.html(feed.render().$el);
    
  }
});