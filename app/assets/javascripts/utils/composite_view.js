Backbone.CompositeView = Backbone.View.extend({
  // add a subview, attach to a selector
  addSubview: function (selector, subview) {
    this.subviews(selector).push(subview);
    this.attachSubview(selector, subview.render()); // render on add
  },

  attachSubview: function (selector, subview) {
    this.$(selector).append(subview.$el);
    // re-bind events in case subview has been removed from DOM
    subview.delegateEvents();
  },

  attachSubviews: function () {
    // to be called on render after subviews have been added,
    // renders everything
    var view = this;
    _(this.subviews()).each(function (subviews, selector) {
      view.$(selector).empty();
      _(subviews).each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  // remove entire composite view
  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) {
        subview.remove();
      });
    });
  },

  // convenience function for views, remove a single subview
  removeSubview: function (selector, subview) {
    subview.remove();

    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1);
  },

  // return all subviews, or subview specific to selector
  subviews: function (selector) {
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  },
  
  // ensures event handlers persist in nested subviews
  delegateEvents: function() {
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) {
        subview.delegateEvents();
      });
    });
    Backbone.View.prototype.delegateEvents.call(this);
  }
});