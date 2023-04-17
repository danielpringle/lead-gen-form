jQuery(function($){

    /**
     * Runs are AJAX call
     * @param {*} page 
     */
    function run_ajax(page = 1) {


        $.ajax({
            url: az_fetch_blogs.ajaxurl,
            type: 'post',
            data: { action: 'az_fetch_blogs', 
                    page: page,
                    sort: jQuery('#az-blog-sort-filter option:selected').val(),
                    category: jQuery('#az-blog-category-filter option:selected').val(),
                    keyword: jQuery('#az-ajax-search').val(),
                    },
            beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
                $('#loader').removeClass('hidden')
            },
            success: function( data ) {
                //console.log(data);
                $('#az-ajax-display-blog-posts').html(data); // insert data // insert data
            },
            complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
                $('#loader').addClass('hidden')
            },
            error : function(error){ console.log(error) }

        })

    }





    /**
     * initial page load
     */
    $(document).ready(function() {
        $.ajax({
            url: az_fetch_blogs.ajaxurl,
            type: 'post',
            data: {
                action: 'az_fetch_blogs',
            },
            beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
                $('#loader').removeClass('hidden')
            },
            success: function( data ) {
                console.log('success');
                $('#az-ajax-display-blog-posts').html(data); // insert data // insert data
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

            $('#az-blog-sort-filter').change(function () {
             
                run_ajax();
    
            });
    
        });
    
    /**
     * Category Filter event
     */
    $(document).ready(function(){

        $('#az-blog-category-filter').change(function () {
         
            run_ajax();

        });
    });




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

 
        run_ajax(page);

    });




    

    /**
     * Search event
     */
    $(document).ready(function(){

        $( "#az-ajax-search" ).keyup(function() {


            run_ajax();

        });

    });

});