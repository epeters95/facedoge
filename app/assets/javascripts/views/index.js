Facedoge.Views.Index = Backbone.CompositeView.extend({
  template: JST["index"],
  
  initialize: function() {
    this.listenTo(Facedoge.allUsers, 'add', this.addUserView);
    this.listenTo(Facedoge.allUsers, 'sync', this.render);
    
    var that = this;
    Facedoge.allUsers.fetch({
      success: function() {
        _(Facedoge.allUsers.models).each(function(user) {
          that.addUserView(user);
        })
      }
    });
  },
  
  addUserView: function (user) {
    var userView = new Facedoge.Views.UserShow({
      model: user
    });
    this.addSubview('#users', userView);
  },  
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    
    this.attachSubviews();
    
    return this;
  }
});