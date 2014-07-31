Facedoge.Views.ImageShow = Backbone.View.extend({
  template: JST["image_show"],
  
  render: function() {
    var view = this.template({
      image: this.model
    });
    this.$el.html(view);
    return this;
  }
});