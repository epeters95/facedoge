// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.cookie
//= require bootstrap
//= require underscore
//= require backbone
//= require moment
//= require facedoge
//= require_tree ../templates
//= require_tree ./utils
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .


$(document).ready(function() {
    filepicker.setKey("APfLg3iZUTanSEgY5zAsNz");
});

var checkForm = function() {
  $('div.form-group').removeClass('has-error');
  $('.alert').remove();
  if (!$('input[type="text"]').val() || !$('input[type="password"]').val()) {
    $('div.alerts').append(
      '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Blank field.</div>');
    $('div.form-group').addClass('has-error');
    return false;
  }
  return true;
};