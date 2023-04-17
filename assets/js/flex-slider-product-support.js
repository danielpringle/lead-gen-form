jQuery(document).ready(function($){

    $(window).load(function() {
      // The slider being synced must be initialized first
      $('#product_support_carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 140,
        itemMargin: 20,
        asNavFor: '#product_support_slider'
      });
     
      $('#product_support_slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#product_support_carousel"
      });
    });

  
});
