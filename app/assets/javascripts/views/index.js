Facedoge.Views.Index = Backbone.CompositeView.extend({
  template: JST["index"],
  
  initialize: function() {
    this.listenTo(Facedoge.allUsers, 'add', this.addUserView);
    this.listenTo(Facedoge.allUsers, 'sync', this.render);
  },
  
  addUserView: function (user) {
    user.fetch();
    var userView = new Facedoge.Views.UserShow({
      model: user
    });
    this.addSubview('#users', userView);
  },
  
  render: function() {
    // Users not rendered twice
    if (this.subviews('#users').length === 0) {
      var that = this;
      _(Facedoge.allUsers.models).each(function(user) {
        that.addUserView(user);
      });
    }
    
    var content = this.template();
    this.$el.html(content);
    
    this.attachSubviews();
    
    return this;
  }
});