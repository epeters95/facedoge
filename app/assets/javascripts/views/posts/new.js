Facedoge.Views.PostNew = Backbone.View.extend({
  template: JST["posts/new"],
  
  events: {
    "submit form" : "newPost"
  },
  
  newPost: function(event) {
    event.preventDefault();
    var post = new Facedoge.Models.Post({
      body: this.$('textarea').val(),
      user_id: this.model.id
    })
    this.model.posts().create(post);
    this.model.fetch();
    var that = this;
    this.currentUser.fetch({ success: function() { that.render() }});
    this.$('textarea').val('');
  },
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});