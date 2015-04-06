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
    stackBoxBlurImage('blurimage','blured-image',20, false, 2);
  }

//Progress Bar
  $('.pie_progress').asPieProgress({
    namespace: 'pie_progress',
    barcolor: '#e74c3c',
    barsize: '8',
    trackcolor: 'none',
    easing: 'linear',
    size: 195
  });

    $('.our-skills').mouseenter(function(){
        $('.pie_progress').asPieProgress('start');
    });

    $('.pie_progress').ready(function(){
      $(".pie_progress:nth-child(1) svg").after('<p>Photoshop</p>');
      $(".pie_progress:nth-child(2) svg").after('<p>HTML5 & CSS3</p>');
      $(".pie_progress:nth-child(3) svg").after('<p>Javascript / Jquery</p>');
      $(".pie_progress:nth-child(4) svg").after('<p>PHP</p>');
    });

});

