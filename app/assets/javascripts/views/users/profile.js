Facedoge.Views.UserProfile = Backbone.CompositeView.extend({
  template: JST["users/profile"],
  
  initialize: function() {
    this.currentUser = Facedoge.currentUser();
    this.currentUser.fetch();
    this.sticky = "posts";
    //this.refreshAll();
    
    //this.listenTo(this.currentUser, 'sync', this.addFriendViews);
    this.listenTo(this.model, 'sync', this.addFriendViews);
    this.listenTo(this.model.friendships(), 'remove add', this.render);
    //this.listenTo(this.currentUser.friendships(), 'sync', this.render);
    //this.listenTo(Facedoge.currentUser().posts(), 'add', this.render);
    //this.listenTo(this.model.posts(), 'add', this.addPostView);
    
    // TODO: wall posting functionality
    var that = this;
    this.model.fetch({
      success: function() {
        that.render();
      }
    });
    this.$el.find($('li.posts-link')).removeClass('active');
    this.$el.find($('li.friends-link')).removeClass('active');
  },
  
  events: {
    "click button#request-btn" : "requestFriend",
    "click li.friends-link" : "switchFriends",
    "click li.posts-link" : "switchPosts"
  },
  
  switchFriends: function() {
    
    var $friendsLink = this.$el.find($('li.friends-link'));
    var $postsLink = this.$el.find($('li.posts-link'));
    
    if (!$friendsLink.hasClass('active')) {
      this.sticky = "friends";
      var target = this.$el.find($('.sticky-target'));
      target.removeClass('posts');
      target.addClass('friends');
      
      $friendsLink.addClass('active');
      $postsLink.removeClass('active');
    }
    
    this.render();
  },
  
  switchPosts: function() {
    var $friendsLink = this.$el.find($('li.friends-link'));
    var $postsLink = this.$el.find($('li.posts-link'));
    
    if (!$postsLink.hasClass('active')) {
      this.sticky = "posts";
      var target = $('.sticky-target');
      target.removeClass('friends');
      target.addClass('posts');
      
      $postsLink.addClass('active');
      $friendsLink.removeClass('active');
    }
    
    this.render();
  },
  
  refreshAll: function() {
    // TODO: This is terrible
    var that = this;
    // this.currentUser.fetch( { success: function() {
    //   that.currentUser = Facedoge.allUsers.get(that.currentUser.id);
    //   that.currentUser.fetch( { success: function() {
    //     that.render();
    //   }});
    // }});
    this.model.fetch();
  },
  
  requestFriend: function (event) {
    switch(this.requestStatus()) {
    case "Unfriend":
      var friendship = this.currentUser.friendships().findWhere({
        in_friend_id: this.model.id
      });
      friendship.destroy();
      this.model.fetch();
      this.currentUser.fetch();
      var friendView;
      var that = this;
      _(this.subviews('.friends')).each(function(view) {
        if (view.model.id === that.currentUser.id) { friendView = view }
      });
      this.removeSubview('.friends', friendView);
      break;
    case "Confirm friends":
      var friendship = new Facedoge.Models.Friendship({
        in_friend_id: this.model.id,
        out_friend_id: this.currentUser.id
      });
      friendship.save();
      this.model.fetch();
      this.currentUser.fetch();
      break;
    case "Add friend":
      var friendship = new Facedoge.Models.Friendship({
        in_friend_id: this.model.id,
        out_friend_id: this.currentUser.id
      });
      friendship.save();
      this.model.fetch();
      this.currentUser.fetch();
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
      this.$el.find("#request").html(button);
    }
  },
  
  addPostView: function(post) {
    var postView = new Facedoge.Views.PostShow({
      model: post
    });
    this.addSubview('.posts', postView);
  },
  
  addFriendViews: function() {
    var that = this;
    _(this.model.connectedFriendIds()).each(function(friendId) {
      var user = Facedoge.allUsers.get(friendId);
      var exists = false;
      _(that.subviews('.friends')).each(function(view) {
        if (view.model.id === friendId) { exists = true }
      });
      if (!exists) {
        var friendView = new Facedoge.Views.UserShow({
          model: user
        });
        user.fetch();
        that.addSubview('.friends', friendView);
        that.$el.find($('.friends')).append('<br>');
      }
    });
    this.renderButton();
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
        user: this.model,
        sticky: this.sticky
      });
      this.$el.html(content);
    }
    
    this.$el.find($('li.posts-link')).removeClass('active');
    this.$el.find($('li.friends-link')).removeClass('active');
    this.$el.find($("li." + this.sticky + "-link")).addClass('active');
    this.renderButton();
    this.attachSubviews();
    
    
        
    return this;
  }
  
});