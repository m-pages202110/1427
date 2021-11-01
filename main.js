$(function () {
  $('.single-item').slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 400,
      dots: true
  });

  $(".hamburger").click(function(){
    $("body").toggleClass("menu-open");
  });
  $(".search").click(function(){
    $("header").toggleClass("search-open");
  });
});