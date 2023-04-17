
// for product loop
function display_product_sub_cat() {
  var x = document.getElementById("show-sub-cat-links");
  
  x.classList.toggle("show");


  var element = document.getElementById("btn-display-categories");
  element.classList.toggle("show");

}

// for resource loop
function display_filter_categories(){

  var x = document.getElementById("show-filter-categories");

  x.classList.toggle("show");

  var element = document.getElementById("btn-display-filter-categories");
  element.classList.toggle("show");

}






/**
 *  Add imnage caption to WooCommerce product gallery
 */
function add_wc_product_caption(){
  var h1 = jQuery('.flex-active-slide');
  var imgTitled = jQuery(h1).find('a').find('img').attr('data-caption');


  jQuery(".flexthum-title").html("");
  jQuery(".flexthum-title").html(imgTitled);

}

jQuery(window).load(function(){

  if (jQuery('body').hasClass('fusion-woo-product-design-classic') || jQuery('body').hasClass('single-product') ) {

    jQuery( '<div class="flexthum-title"></div>' ).insertAfter('.flex-viewport');

    add_wc_product_caption();

    jQuery(document).on( 'click', '.flex-nav-next', function( event ) {
      add_wc_product_caption();
    });

    jQuery(document).on( 'click', '.flex-nav-prev', function( event ) {
      add_wc_product_caption();
    });

    jQuery('ol.flex-control-nav').click(function(){
      jQuery('ol.flex-control-nav').each(function() {
        add_wc_product_caption();
      });
    });

}});
