const $ = require("jquery");

function initButton() {
  console.log($('body > header button'));
  $('body > header button').click(function() {
    let _this = this;
    $(_this).removeClass('is-active').addClass('is-active');
    setTimeout(function() {
      $(_this).removeClass('is-active');
    }, 600);

    $('.main').toggleClass('full');
  });
}

$(function () {
  initButton();
});