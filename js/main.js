$(window).load(function(){

//Slider Activeta
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        autoplay: 3000,
        effect: 'fade',
        autoplayDisableOnInteraction: false
    });

//Blured Background

  if ($('.our-skills').has('blurimage')) {
    $('.our-skills').append("<canvas id=\"blured-image\"></canvas>");
    stackBoxBlurImage('blurimage','blured-image',6, false, 1);
  }

});
