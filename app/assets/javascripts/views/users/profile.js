Facedoge.Views.UserProfile = Backbone.CompositeView.extend({
  template: JST["users/profile"],
  
  initialize: function() {
    this.currentUser = Facedoge.currentUser();
    
    this.refreshAll();
    
    //this.listenTo(this.currentUser, 'sync', this.render);
    //this.listenTo(this.model, 'sync', this.render);
    //this.listenTo(this.model.friendships(), 'remove', this.render);
    //this.listenTo(Facedoge.currentUser().posts(), 'add', this.render);
    this.listenTo(this.model.posts(), 'add', this.addPostView);
    
    // TODO: wall posting functionality
    
    // var that = this;
    // this.currentUser.fetch({
    //   success: function() {
    //     var form = new Facedoge.Views.PostNew({
    //       model: that.currentUser,
    //       collection: that.currentUser.posts()
    //     });
    //     that.addSubview(".post-new", form);
    //   }
    // });
  },
  
  events: {
    "click button#request-btn" : "requestFriend"
  },
  
  refreshAll: function() {
    // TODO: This is terrible
    var that = this;
    this.currentUser.fetch( { success: function() {
      that.currentUser = Facedoge.allUsers.get(that.currentUser.id);
      that.currentUser.fetch( { success: function() {
        that.render();
      }});
    }});
    this.model.fetch();
  },
  
  requestFriend: function (event) {
    switch(this.requestStatus()) {
    case "Unfriend":
      var friendship = this.currentUser.friendships().findWhere({
        in_friend_id: this.model.id
      });
      friendship.destroy();
      this.refreshAll();
      break;
    case "Confirm friends":
      var friendship = new Facedoge.Models.Friendship({
        in_friend_id: this.model.id,
        out_friend_id: this.currentUser.id
      });
      friendship.save();
      this.refreshAll();
      break;
    case "Add friend":
      var friendship = new Facedoge.Models.Friendship({
        in_friend_id: this.model.id,
        out_friend_id: this.currentUser.id
      });
      friendship.save();
      this.refreshAll();
      break;
    default:
      console.log("you fucked up somewhere");
    }
  },
  
  requestStatus: function () {
    if (!this.currentUser.id || !this.model.id ||
      this.currentUser.id === this.model.id) {
      return 0;
    }
    if (this.currentUser.isFriendsWith(this.model)) {
      return "Unfriend";
    } else {
      var ins = [];
      var outs = [];
      _(this.model.friendships().models).each(function(friendship) {
        ins.push(friendship.get("in_friend_id"));
        outs.push(friendship.get("out_friend_id"));
      });
      if (outs.indexOf(this.currentUser.id) > -1) {
        return "Request sent";
      }
      if (ins.indexOf(this.currentUser.id) > -1) {
        return "Confirm friends";
      }
    }
    return "Add friend";
  },
  
  renderButton: function() {
    var status = this.requestStatus();
    if (status) {
      var button = $('<button>' + status + '</button>');
      button.attr('id', 'request-btn');
      this.$el.find("#request").append(button);
    }
  },
  
  addPostView: function(post) {
    var postView = new Facedoge.Views.PostShow({
      model: post
    });
    this.addSubview('.posts', postView);
  },
  
  render: function() {
    // TODO: clean up some incomplete renders
    var that = this;
    if (this.subviews('.posts').length === 0) {
      _(this.model.posts().models).each(function(post) {
        var postView = new Facedoge.Views.PostShow({
          model: post
        });
        that.addSubview(".posts", postView);
      });
    }
    
    if (this.model.profile()) {
      var content = this.template({
        user: this.model
      });
      this.$el.html(content);
    }
    this.renderButton();
    this.attachSubviews();
    return this;
  },
  
});