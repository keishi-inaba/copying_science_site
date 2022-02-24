/*
バーガーメニュー
*/

$('.openbtn').on('click', function() {
  $(this).toggleClass('active');
  $('#g-nav').toggleClass('panelactive');
});

$('#g-nav a').on('click', function() {
  $('.openbtn').removeClass('active');
  $('#g-nav').removeClass('panelactive');
});


/*
スクロール
*/ 
$(window).scroll(function() {
  $('.fadeUp').each(function() {
    var el = $(this).offset().top-50;
    var scroll = $(window).scroll();
    var windowH = $(window).height();

   if(scroll >= el -windowH) {
     $(this).addClass('fadeIn');
   } else {
     $(this).removeClass('fadeIn');
   }
  })
})


/*
ページトップスクロール
*/
$('#page-top').click(function() {
  $('body, html').animate({
    scrollTop: 0
  }, 500);
  return false;
})