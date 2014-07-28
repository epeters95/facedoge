Facedoge.Collections.FriendPosts = Facedoge.Collections.Posts.extend({  
  comparator: function(post) {
    return -post.get("body");
  }
});