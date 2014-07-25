Facedoge.Views.Index = Backbone.CompositeView.extend({
  template: JST["index"],
  
  initialize: function() {
    this.listenTo(Facedoge.allUsers, 'add', this.addUserView);
    this.listenTo(Facedoge.allUsers, 'sync', this.render);
    this.listenTo(Facedoge.allUsers, 'reset', this.render2);
    
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
  
  render2: function() {
    this.remove();
  },
  
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    
    this.attachSubviews();
    
    return this;
  }
});