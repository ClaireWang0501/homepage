import '../styles/animation.sass';

const $ = require("jquery");

$(function () {

  $('.section-notification .nav li').click(function(){
    $(this).addClass('is-active').siblings().removeClass('is-active');

    if ($(this).hasClass('search')) {
      $('.section-notification .alert-element').addClass('is-active');
      setTimeout(function() {
        $('.section-notification .alert-element').removeClass('is-active');
      }, 3000);
    }

    if ($(this).hasClass('face')) {
      $('.section-notification .overlay').addClass('is-active');
      setTimeout(function(){
        $('.section-notification .overlay').removeClass('is-active');
      }, 3000);
    }
  });

});