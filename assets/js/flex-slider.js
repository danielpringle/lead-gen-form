jQuery(document).ready(function($){
    // Adjust slide heights to match other.
    function setEqualHeight(selector) {
      var heights = new Array();
    
      $(selector).each(function() {
    
        $(this).css('min-height', '0');
        $(this).css('max-height', 'none');
        $(this).css('height', 'auto');
    
         heights.push($(this).height());
      });
    
      var max = Math.max.apply( Math, heights );
    $(selector).each(function() {
        $(this).css('height', max + 'px');
      });	
    }

      // setEqualHeight('#az-related-products .slides li');
    
      // $(window).resize(function() {
    
      //   setTimeout(function() {
      //         setEqualHeight('#az-related-products .slides li');
      //   }, 120);
      // });

    // Flex slider settings
    $('#az-related-products.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      smoothHeight: true,
      controlNav: true,               
      directionNav: true, 
      controlsContainer: $(".custom-controls-container"),
      customDirectionNav: $(".custom-navigation a"),
      slideshowSpeed: 5000, 
      itemWidth: 350,
      itemMargin: 30,
      minItems: 1,
      maxItems: 3,
    });

  window.refresh = function() {
    location.reload();
  };

});
