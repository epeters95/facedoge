Facedoge.Views.CurrentProfile = Facedoge.Views.UserProfile.extend({
  
  initialize: function() {
    this.currentUser = Facedoge.currentUser();
    this.listenTo(this.currentUser, 'sync', this.addFriendViews);
    this.listenTo(this.currentUser.friendships(), 'remove add', this.render);
    this.listenTo(this.currentUser.posts(), 'add', this.addPostView);
    this.sticky = "posts";
    
    this.form;
    
    var that = this;
    this.currentUser.fetch({
      success: function() {
        that.form = new Facedoge.Views.PostNew({
          model: that.currentUser,
          collection: that.currentUser.posts()
        });
        that.render();
      }
    });
  },
  
  events: {
    "click button#request-btn" : "requestFriend",
    "click li.friends-link" : "switchFriends",
    "click li.posts-link" : "switchPosts",
    "click li.photos-link" : "switchPhotos",
    "click button#edit" : "switchEdit",
    "click button#save" : "saveEdit",
    "click button#widget" : "savePhoto",
    "click button.profile-button" : "updatePhoto"
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
        that.currentUser.images().invoke('set', { profile: false });
        image.save({}, { success: function() {
          that.currentUser.images().add(image);
          that.addPhotoView(image);
          that.render();
        }});
      },
      function(FPError){
        console.log(FPError.toString());
      }
    );
  },
  
  updatePhoto: function() {
    var imageId = $('button.profile-button').attr('id');
    var image = this.currentUser.images().findWhere({
      id: parseInt(imageId)
    });

    _(this.currentUser.images().models).each(function(image) {
      image.set({ profile: false });
      image.save();
    });
    image.set({ profile: true });
    var that = this;
    image.save({}, { success: function() {
      that.currentUser.fetch();
      that.render();
    }});
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
    }, { patch: true, wait: true });
    this.currentUser.fetch();
    this.render();
  },
  
  addPostView: function(post) {
    this.currentUser.fetch();
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
  },
  
  renderProfilePic: function() {
    var $div = this.$('div#profile-pic');
    var pic = this.currentUser.images().findWhere({ profile: true });
    if (pic) {
      $div.html('<img class="profile" src="' + pic.get("file_url") + '">');
    } else {
      $div.html('<img class="profile" src="/assets/profile.png">');
    }
    var img = $("img.profile")[0];
    var img_width, img_height;
    var that = this;
    $("<img/>") // Make in memory copy of image to avoid css issues
      .attr("src", $(img).attr("src"))
      .load(function() {
        img_width = this.width;   // Note: $(this).width() will not
        img_height = this.height; // work for in memory images.
        that.stickyLinks(img_height * 290/img_width);
      });
  },
  
  stickyLinks: function(offset) {
    var stickyHeaderTop = offset + 52;
    $(document).scroll(function() {
      if( $(document).scrollTop() > stickyHeaderTop ) {
        $('.sticky-links').css({position: 'fixed', top: '100px'});
      } else {
        $('.sticky-links').css({position: 'static', top: '500px'});
      }
    });
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
    
    if (this.subviews('.photos').length === 0 && this.currentUser.images().length > 0) {
      _(this.currentUser.images().models).each(function(image) {
        var imageView = new Facedoge.Views.ImageShow({
          model: image
        });
        that.addSubview('.photos', imageView);
      });
    }
    
    if (this.sticky === 'friends') {
      if (this.subviews('.friends').length === 0) { this.addFriendViews(); }
      if (this.subviews('.post-new')[0]) {
        this.removeSubview('.post-new', this.subviews('.post-new')[0]);
      }
    } else if (this.sticky === '.photos') {
      this.removeSubview('.friends', this.subviews('.friends'));
      if (this.subviews('.post-new')[0]) {
        this.removeSubview('.post-new', this.subviews('.post-new')[0]);
      }
    } else if (this.sticky === 'posts' && this.form) {
      this.addSubview('.post-new', this.form);
    }
    
    var content = this.template({
      user: this.currentUser,
      sticky: this.sticky
    });    
    this.$el.html(content);
    
    this.renderProfilePic();
    
    this.$el.find($('.name-header')).append('<button id="edit">Edit Profile</button></h1>');
    this.$el.find($('li.photos-link')).removeClass('active');
    this.$el.find($('li.posts-link')).removeClass('active');
    this.$el.find($('li.friends-link')).removeClass('active');
    this.$el.find($("li." + this.sticky + "-link")).addClass('active');
    if (this.currentUser.profile()) {
      $('.right-bar').append('<div class="post-new"></div>');
    }
    
    this.attachSubviews();
    if (this.$('.photos')[0]) { $(this.$('.photos')[0]).addClass('container')}
    return this;
  }
});