//script for sliders

$(document).ready(function(){
  console.log("DOM Ready");

  prepareSlider();
  
  prepareHover();

});


function prepareSlider(){
  
    jQuery('#slider').slippry({
      // general elements & wrapper
      slippryWrapper: '<div class="sy-box news-slider" />', // wrapper to wrap everything, including pager
      elements: 'article', // elments containing slide content
    
      // options
      adaptiveHeight: false, // height of the sliders adapts to current 
      captions: false,
    
      // pager
      pagerClass: 'news-pager',
    
      // transitions
      transition: 'horizontal', // fade, horizontal, kenburns, false
      speed: 1200,
      pause: 8000,
      auto: false,  
    
      // slideshow
      autoDirection: 'prev'
    });
  
  
}

function prepareHover(){
  var moveLeft = 0;
  var moveDown = 0;
  $('a.popper').hover(function(e) {
   
    var target = '#' + ($(this).attr('data-popbox'));
         
    $(target).show();
    moveLeft = $(this).outerWidth();
    moveDown = ($(target).outerHeight() / 2);
  }, function() {
    var target = '#' + ($(this).attr('data-popbox'));
    $(target).hide();
  });
 
  
 
}

