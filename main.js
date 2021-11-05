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
  // $(".search").click(function(){
  //   $("header").toggleClass("search-open");
  // });

  $('#mask').click(function() {
    // openクラスを削除して、メニューを閉じる
    $('body').removeClass('menu-open');
  });

  ScrollReveal().reveal('.row', { 
    duration: 800, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    reset: false,   // 何回もアニメーション表示するか
    origin: 'bottom',
    distance: '20px'
  });
});
