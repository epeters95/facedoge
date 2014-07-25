Facedoge.Views.PostShow = Backbone.CompositeView.extend({
  template: JST["posts/show"],
  
  initialize: function() {
    var user = this.model.collection.user;
    var userView = new Facedoge.Views.UserShow({ model: user });
    this.addSubview('.posting-user', userView);
  },
  
  render: function() {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});