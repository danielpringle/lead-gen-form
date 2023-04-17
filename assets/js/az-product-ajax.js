jQuery(function($){

    function get_filter_atts() {
                
        const filter_atts = {}; 

        var cusid_ele = document.getElementsByClassName('az-att-filter');
            for (var i = 0; i < cusid_ele.length; ++i) {
                var item = cusid_ele[i];  
                let attributeValue = item.getAttribute('data-att-id');
                
                var output = item.value;//item.options[item.selectedIndex].value;
                filter_atts[attributeValue] = output;
            }

        return filter_atts;
    }

    function run_ajax(n, page = 1) {

        $.ajax({
            url: az_fetch_products.ajaxurl,
            type: 'post',
            data: { action: 'az_fetch_products', 
                    keyname2: jQuery('#azproductdisplayfilter option:selected').val(),
                    keyname: jQuery('#azproductcategoryfilter option:selected').val(),
                    keyword: jQuery('#az-product-search').val(),
                    cat_id: jQuery('#az-product-container').attr("data-cat-id"),
                    filter_atts: n,
                    page: page,
                    },
            beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
                $('#loader').removeClass('hidden')
            },
            success: function( data ) {
                console.log(data);
                $('#az-display-products').html(data); // insert data // insert data
            },
            complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
                $('#loader').addClass('hidden')
            },
            error : function(error){ console.log(error) }

        })

    }


    /**
     * Pagination event
     */

    let page = 1;

	$(document).on( 'click', '.page-numbers', function( event ) {
 
		event.preventDefault();

        if($(this).closest("a").hasClass('next') ){
            page++;
        } else if ($(this).closest("a").hasClass('prev')){
            page--;
        } else {
            page = $(this).text();
        }

        n = get_filter_atts();

        run_ajax(n, page);

    });





    /**
     * initial page load
     */
    $(document).ready(function() {
        $.ajax({
            url: az_fetch_products.ajaxurl,
            type: 'post',
            data: {
                action: 'az_fetch_products',
                cat_id: jQuery('#az-product-container').attr("data-cat-id"),
            },
            beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
                $('#loader').removeClass('hidden')
            },
            success: function( data ) {
                console.log(data);
                $('#az-display-products').html(data); // insert data // insert data
            },
            complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
                $('#loader').addClass('hidden')
            },
            error : function(error){ console.log(error) 
            }
        })
    });

    
    /**
     * Sort Filter
     */
    $(document).ready(function(){

            $('#azproductcategoryfilter').change(function () {
             

                n = get_filter_atts();

                run_ajax(n);

            });


            /**
             * Display Filter
             */
            $('#azproductdisplayfilter').change(function () {
                n = get_filter_atts();

                run_ajax(n);

            });

           /**
            * Attribute filters
            */
            $('.az-att-filter').change(function () { 

                n = get_filter_atts();

                run_ajax(n);

        });
    });

    /**
     * Search event
     */
    $(document).ready(function(){

        $( "#az-product-search" ).keyup(function() {

            n = get_filter_atts();

            run_ajax(n);

        });

    });

});