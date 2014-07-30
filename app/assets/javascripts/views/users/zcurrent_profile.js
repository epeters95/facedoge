Facedoge.Views.CurrentProfile = Facedoge.Views.UserProfile.extend({
  
  initialize: function() {
    this.currentUser = Facedoge.currentUser();
    this.listenTo(this.currentUser, 'sync', this.addFriendViews);
    this.listenTo(this.currentUser.friendships(), 'remove add', this.render);
    this.listenTo(this.currentUser.posts(), 'add', this.addPostView);
    this.sticky = "posts";
    
    var that = this;
    this.currentUser.fetch({
      success: function() {
        var form = new Facedoge.Views.PostNew({
          model: that.currentUser,
          collection: that.currentUser.posts()
        });
        that.addSubview(".post-new", form);
        that.render();
      }
    });
  },
  
  events: {
    "click button#request-btn" : "requestFriend",
    "click li.friends-link" : "switchFriends",
    "click li.posts-link" : "switchPosts",
    "click button#edit" : "switchEdit",
    "click button#save" : "saveEdit",
    "click button#widget" : "savePhoto"
  },
  
  savePhoto: function() {
    var that = this;
    filepicker.pick({
        mimetypes: ['image/*'],
        container: 'modal',
        services:['COMPUTER', 'IMAGE_SEARCH'],
      },
      function(InkBlob){
        var image = new Facedoge.Models.Image({
          file_url: InkBlob.url,
          user_id: that.currentUser.id,
          profile: true
        });
        that.currentUser.images().create(image);
        that.currentUser.fetch();
      },
      function(FPError){
        console.log(FPError.toString());
      }
    );
  },
  
  switchEdit: function() {
    this.template = JST["users/edit_profile"];
    this.render();
  },
  
  saveEdit: function() {
    this.template = JST["users/profile"];
    this.currentUser.save({
      email: this.$('#email').val(),
      profile: {
        first_name: this.$('#first-name').val(),
        last_name: this.$('#last-name').val(),
        bio: this.$('#bio').val(),
        user_id: this.currentUser.id
      }
    }, {patch: true, wait: true});
    this.render();
  },
  
  addPostView: function(post) {
    var postView = new Facedoge.Views.PostShow({
      model: post
    });
    this.addSubview('.posts', postView);
  },
  
  addFriendViews: function() {
    var that = this;
    _(this.currentUser.connectedFriendIds()).each(function(friendId) {
      var user = Facedoge.allUsers.get(friendId);
      
      user.fetch();
      var exists = false;
      _(that.subviews('.friends')).each(function(view) {
        if (view.model.id === friendId) { exists = true }
      });
      if (!exists) {
        var friendView = new Facedoge.Views.UserShow({
          model: user
        });
        that.addSubview('.friends', friendView);
      }
    });
    this.render();
  },
  
  renderProfilePic: function() {
    var $div = this.$('div#profile-pic');
    var pic = this.currentUser.images().findWhere({ profile: true });
    if (pic) { $div.html('<img src="' + pic.get("file_url") + '">'); }
  },
    
  render: function() {
    // only show current user posts (no wall posting yet)
    var that = this;
    if (this.subviews('.posts').length === 0) {
      _(this.currentUser.posts().models.reverse()).each(function(post) {
        var postView = new Facedoge.Views.PostShow({
          model: post
        });
        that.addSubview(".posts", postView);
      });
    }
    
    var content = this.template({
      user: this.currentUser,
      sticky: this.sticky
    });    
    this.$el.html(content);
    
    this.renderProfilePic();
    
    if (this.currentUser.profile()) {
      // var $filePickerInput = this.$("input[type=filepicker]");
//       filepicker.constructWidget($filePickerInput[0]);
    }
    
    this.$el.find($('.name-header')).append('<button id="edit">Edit Profile</button></h1>');
    
    this.$el.find($('li.posts-link')).removeClass('active');
    this.$el.find($('li.friends-link')).removeClass('active');
    this.$el.find($("li." + this.sticky + "-link")).addClass('active');
    this.attachSubviews();
    return this;
  }
});