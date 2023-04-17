


jQuery(function($){

  $(document).ready(function(){

    $(".slick-slider").slick({
      slidesToShow: 3,
      infinite:false,
      slidesToScroll: 3,
      dots: true,
      arrows: true,
      adaptiveHeight: true,
      prevArrow: $(".slick-previous-item"),
      nextArrow: $(".slick-next-item"),
      appendDots: $(".slick-slider-pagination-dots"),
       responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
     });


     $(".slick-slider-services").slick({
      slidesToShow: 3,
      infinite:false,
      slidesToScroll: 3,
      dots: true,
      arrows: true,
      adaptiveHeight: true,
      prevArrow: $(".slick-previous-item"),
      nextArrow: $(".slick-next-item"),
      appendDots: $(".slick-slider-pagination-dots"),
       responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
     });

     $(".slick-slider-img-cards").slick({
      slidesToShow: 3,
      infinite:true,
      slidesToScroll: 3,
      dots: true,
      arrows: true,
      adaptiveHeight: true,
      prevArrow: $(".slick-previous-item"),
      nextArrow: $(".slick-next-item"),
      appendDots: $(".slick-slider-pagination-dots"),
       responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
     });

     

   
  });

});