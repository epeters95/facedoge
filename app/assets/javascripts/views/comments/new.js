Facedoge.Views.CommentNew = Backbone.View.extend({
  template: JST["comments/new"],
  
  initialize: function() {
    this.currentUser = Facedoge.currentUser();
    this.post = this.model;
  },
  
  events: {
    "submit form" : "newComment"
  },
  
  newComment: function(event) {
    event.preventDefault();
    var comment = new Facedoge.Models.Comment({
      body: this.$('textarea').val(),
      user_id: this.currentUser.id,
      post_id: this.post.id
    });
    this.post.comments().create(comment);
    this.$('textarea').val('');
  },
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});