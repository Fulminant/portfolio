// $(document).ready(function(){
// var swiper = new Swiper('.swiper-container', {
//         pagination: '.swiper-pagination',
//         paginationClickable: '.swiper-pagination',
//         autoplay: 3000,
//         effect: 'fade',
//         autoplayDisableOnInteraction: false
//     });

$(function() {
  // Change this value to adjust the amount of blur
  var BLUR_RADIUS = 100;

  var canvas = document.querySelector('[data-canvas]');
  var canvasContext = canvas.getContext('2d');

  var image = new Image();
  image.src = document.querySelector('[data-canvas-image]').src;

  var drawBlur = function() {
    var w = canvas.width;
    var h = canvas.height;
    canvasContext.drawImage(image, 0, 0, w, h);
    stackBlurCanvasRGBA = ('heroCanvas', 0, 0, w, h, BLUR_RADIUS);
  };

  image.onload = function() {
    drawBlur();
  }

  console.log('stackBlurCanvasRGBA');
});



// });
