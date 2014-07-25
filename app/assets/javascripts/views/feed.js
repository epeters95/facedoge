Facedoge.Views.Feed = Backbone.CompositeView.extend({
  template: JST["feed"],
  
  events: {},
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});