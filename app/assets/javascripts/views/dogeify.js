Facedoge.Views.Dogeify = Backbone.View.extend({
  template: JST["dogeify"],
  
  events: {
    "click button" : "dogeify"
  },
  
  initialize: function() {
    this.dogeFactor = 1;
  },
  
  dogeify: function() {
    var colors = [
      '#00c2d9',
      '#c30000',
      '#0029c3',
      '#b537ea',
      '#ea8b37',
      '#08b34d',
      '#000000',
      '#FFFFFF',
      '#d5e400'
    ];
    var firsts = ["so ", "such ", "much ", "very ", "many ", "such ", "much ", "so "];
    var lasts = ["doge", "good", "wow", "face", "doge", "profile", "post", "comment", "text", "doge", "wow", "face", "text", "random", "random", "image", "click", "website"];
    var outcomes = ["text", "text", "image", "text"];
    var images = ["/assets/doge.png", "/assets/doge2.png"];
    
    var n = this.dogeFactor * 2 + 2;
    while (n > 0) {
      var posx = (Math.random() * ($(window).width())).toFixed();
      var posy = (Math.random() * ($(window).height())).toFixed();
      switch(_.sample(outcomes)) {
      case "text":
        var string = _.sample(firsts) + _.sample(lasts);
        if (Math.floor(Math.random() * 5) === 1) { string = "wow" }
        var color = _.sample(colors);
        $('body').append($('<span class="doge" style="position: fixed; left: ' + posx + 'px; top: ' + posy + 'px; color: ' + color + '; font-family: Comic Sans MS, cursive; font-size: 14pt">' + string + '</span>'));
        break;
      case "image":
        var src = _.sample(images);
        $('body').append($('<img class="doge" src="' + src + '" style="position: fixed; left: ' + posx + 'px; top: ' + posy + 'px;">'));
        break;
      }
      n--;
    }
    this.dogeFactor++;
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});